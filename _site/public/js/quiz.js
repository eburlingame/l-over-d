

function Quiz(name, questions)
{
    this.rawQuestions = questions;
    this.rawSplit = [];
    this.questions = [];
    this.name = name;

    this.processQuestions = function ()
    {
        for (var i = 0; i < this.rawQuestions.length; i++)
        {
            if (this.rawQuestions[i] != "")
            {
                this.questions.push(new Question(this.rawQuestions[i], i));
            }
        }
    }

    this.compile = function ()
    {
        return { "name": this.name, "questions": this.rawQuestions };
    }

    this.reset = function ()
    {
        for (var i = 0; i < this.questions.length; i++)
        {
            this.questions[i].reset();
        }
    }

    this.completed = function()
    {
        for (var i = 0; i < this.questions.length; i++)
        {
            if (!this.questions[i].solved())
            return false;
        }
        return true;
    }

    this.processQuestions();
}

function Question(raw, num)
{
    this.num = num;
    this.rawText = raw;
    this.state = 0;
    this.inputMarkup = "";
    this.prettyPrint = "";
    this.groups = []; // Holds an array of input groups, which hold the answers

    // Converts the * * to <input> groups
    this.convertToInput = function (rawText)
    {
        var md = rawText;
        md = this.processAsterisks(md);
        md = this.convertMarkdown(md);
        return md;
    };

    this.makePrettyPrint = function (rawText)
    {
        var out = rawText.replace(/\*/g, "**");
        out = this.convertMarkdown(out);
        out = out.replace(/<strong>/g, "<strong style='color: #21ba45'>");
        return out;
    }

    // Converts the markdown to html markup
    this.convertMarkdown = function (markdown)
    {
        return marked(markdown);
        return this.markdown.toHTML(markdown, "Gruber");
    };

    // Replaces * * and [ ] pairs with appropriate group/id numbers
    this.processAsterisks = function (rawText)
    {
        var a = rawText.split(""); // Convert to array
        var totalID = 0; // Incrementing for each input
        var groupNum = 0;
        var idNum = 0;
        var astOpen = false; // If we are in an open asterisk
        var brackOpen = false; // If we are in an open bracket
        var last = ""; // To hold the text between the *'s

        var result = "";

        for (var i = 0; i < rawText.length; i++)
        {
            if (a[i] == "[" || a[i] == "]")
            {
                if (brackOpen)
                {
                    // Close group
                    brackOpen = false;
                    groupNum++;
                }
                else
                {
                    brackOpen = true;
                }
            }
            else if (a[i] == "*")
            {
                if (astOpen)
                {
                    if (typeof this.groups[groupNum] != "object")
                    {
                        this.groups[groupNum] = [];
                        idNum = 0;
                    }
                    this.groups[groupNum][idNum] = {};
                    this.groups[groupNum][idNum].text = last;
                    this.groups[groupNum][idNum].found = false;

                    result += this.makeInput(totalID, groupNum, idNum);
                    astOpen = false;
                    last = "";

                    totalID++;
                    idNum++;
                    if (!brackOpen)
                    {
                        groupNum++;
                    }
                }
                else
                {
                    astOpen = true;
                }
            }
            else if (astOpen)
            {
                last += a[i];
            }
            else
            {
                result += a[i]; // Add the charachter
            }
        }
        return result;
    }

    this.getInputID = function (groupNum, idNum)
    {
        return "blank_grp" + groupNum + "_id" + idNum;
    }

    // Make an <input> tag with the group and id
    this.makeInput = function (id, groupNum, idNum, value)
    {
        return "<span class='ui tiny input' style=''>"
             + "<input type='text' id='" + this.getInputID(groupNum, idNum) 
             + "' class='question" + this.num + "'></input></span>";
    }

    // Checks an array of all inputs for correctness
    this.checkInputArray = function (array)
    {
        var j = 0;
        for (var g = 0; g < this.groups.length; g++)
        {
            for (var i = 0; i < this.groups[g].length; i++)
            {
                if (array[j] != null)
                {
                    var entered = array[j];
                    this.checkInput(g, entered);
                }
                j++;
            }
        }
        return this.solved();
    }

    this.getBlankData = function (totalID)
    {
        var j = 0;
        for (var g = 0; g < this.groups.length; g++)
        {
            for (var i = 0; i < this.groups[g].length; i++)
            {
                if (j == totalID)
                {
                    return {
                        "id": this.getInputID(g, i),
                        "groupSolved": this.checkGroup(g),
                        "correct": this.groups[g][i].text
                    };
                }
                j++;
            }
        }
    }

    this.getNumBlanks = function ()
    {
        var j = 0;
        for (var g = 0; g < this.groups.length; g++)
        {
            for (var i = 0; i < this.groups[g].length; i++)
            {
                j++;
            }
        }
        return j;
    }

    // Check a particular question blank
    this.checkInput = function (groupNum, compare)
    {
        compare = compare.replace(/\s/g, "").toLowerCase();

        for (var idNum = 0; idNum < this.groups[groupNum].length; idNum++)
        {
            var correct = this.groups[groupNum][idNum].text;
            correct = correct.trim().replace(/\s/g, "").toLowerCase();
            var split = correct.split(","); // Split by ,
            for (var j = 0; j < split.length; j++)
            {
                if (split[j] == compare)
                {
                    this.groups[groupNum][idNum].found = true;
                    break;
                }
            }
        }
        
        return this.checkGroup(groupNum);
    }

    // Check a particular question group for completion
    this.checkGroup = function (groupNum)
    {
        var group = this.groups[groupNum];
        for (var i = 0; i < group.length; i++)
        {
            if (!group[i].found)
                return false;
        }
        return true;
    }

    // Check for all groups completed
    this.solved = function ()
    {
        for (var i = 0; i < this.groups.length; i++)
        {
            if (!this.checkGroup(i))
            {
                return false;
            }
        }
        return true;
    }

    // Reset
    this.reset = function()
    {
        this.state = 0;
        this.groups = [];
    }

    this.construct = function ()
    {
        // Process everything
        this.inputMarkup = this.convertToInput(this.rawText);
        this.prettyPrint = this.makePrettyPrint(this.rawText);
        this.state = 0;
    }

    this.construct();
}