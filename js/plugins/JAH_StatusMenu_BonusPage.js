//=============================================================================
// JahwsUF - Status Menu Bonus Page
// JAH_StatusMenu_BonusPage.js
// Version: 2.0.0 alpha
//=============================================================================

var Imported = Imported || {};			 // If YEP_CoreEngine is imported, this has a boolean variable stating so.

if(Imported.JahwsUF_StatusMenuCore != true)
{
	throw Error("The Status Menu Bonus Page plugin cannot function without JahwsUF's StatusMenuCore plugin installed in a higher position!");
}

var JahwsUF = JahwsUF || {};

JahwsUF.CurrentPluginName = "JAH_StatusMenu_BonusPage";  // Change to reflect the actual name of this file.

//=============================================================================
/*:
 * @plugindesc v2.0.0 alpha
 * Provides a secondary "parameter" page with full customization options,
 * separated for ease of organization.
 * @author JahwsUF
 *
 * @param Page ID
 * @desc If in doubt, leave unchanged.  Should be unique for every bonus page.  Must be > 0.
 * @default 1
 *
 * @param ---Page Header 1--- 
 * @desc Any "grouping" with a blank row placement will not be used.
 * @default
 *
 * @param Grouping Title 1
 * @desc A raw text entry to print on the param page.
 * Can be left blank to create empty space.
 * @default Basic Parameters
 * 
 * @param Row Placement 1
 * @desc The row where this text entry should be inserted.
 * Parameter placement will be adjusted accordingly.
 * @default 1
 *
 * @param Group Columns 1
 * @desc The column(s) in which the text should be inserted.
 * Columns must be adjacent.
 * @default 1, 2
 *
 * @param ---Page Header 2--- 
 * @desc Any "grouping" with a blank row placement will not be used.
 * @default
 *
 * @param Grouping Title 2
 * @desc A raw text entry to print on the param page.
 * Can be left blank to create empty space.
 * @default 
 * 
 * @param Row Placement 2
 * @desc The row where this text entry should be inserted.
 * Parameter placement will be adjusted accordingly.
 * @default 2
 *
 * @param Group Columns 2
 * @desc The column(s) in which the text should be inserted.
 * Columns must be adjacent.
 * @default 1, 2 
 *
 * @param ---Page Header 3--- 
 * @desc Any "grouping" with a blank row placement will not be used.
 * @default
 *
 * @param Grouping Title 3
 * @desc A raw text entry to print on the param page.
 * Can be left blank to create empty space.
 * @default 
 * 
 * @param Row Placement 3
 * @desc The row where this text entry should be inserted.
 * Parameter placement will be adjusted accordingly.
 * @default
 *
 * @param Group Columns 3
 * @desc The column(s) in which the text should be inserted.
 * Columns must be adjacent.
 * @default  
 *
 * @param ---Page Header 4--- 
 * @desc Any "grouping" with a blank row placement will not be used.
 * @default
 *
 * @param Grouping Title 4
 * @desc A raw text entry to print on the param page.
 * Can be left blank to create empty space.
 * @default 
 * 
 * @param Row Placement 4
 * @desc The row where this text entry should be inserted.
 * Parameter placement will be adjusted accordingly.
 * @default 
 *
 * @param Group Columns 4
 * @desc The column(s) in which the text should be inserted.
 * Columns must be adjacent.
 * @default  
 *
 * @param ---Page Header 5--- 
 * @desc Any "grouping" with a blank row placement will not be used.
 * @default
 *
 * @param Grouping Title 5
 * @desc A raw text entry to print on the param page.
 * Can be left blank to create empty space.
 * @default 
 * 
 * @param Row Placement 5
 * @desc The row where this text entry should be inserted.
 * Parameter placement will be adjusted accordingly.
 * @default 
 *
 * @param Group Columns 5
 * @desc The column(s) in which the text should be inserted.
 * Columns must be adjacent.
 * @default  
 *
 * @param ---Page Header 6--- 
 * @desc Any "grouping" with a blank row placement will not be used.
 * @default
 *
 * @param Grouping Title 6
 * @desc A raw text entry to print on the param page.
 * Can be left blank to create empty space.
 * @default 
 * 
 * @param Row Placement 6
 * @desc The row where this text entry should be inserted.
 * Parameter placement will be adjusted accordingly.
 * @default 
 *
 * @param Group Columns 6
 * @desc The column(s) in which the text should be inserted.
 * Columns must be adjacent.
 * @default  
 *
 * @param ---Page Header 7--- 
 * @desc Any "grouping" with a blank row placement will not be used.
 * @default
 *
 * @param Grouping Title 7
 * @desc A raw text entry to print on the param page.
 * Can be left blank to create empty space.
 * @default 
 * 
 * @param Row Placement 7
 * @desc The row where this text entry should be inserted.
 * Parameter placement will be adjusted accordingly.
 * @default 
 *
 * @param Group Columns 7
 * @desc The column(s) in which the text should be inserted.
 * Columns must be adjacent.
 * @default  
 *
 * @param ---Page Header 8--- 
 * @desc Any "grouping" with a blank row placement will not be used.
 * @default
 *
 * @param Grouping Title 8
 * @desc A raw text entry to print on the param page.
 * Can be left blank to create empty space.
 * @default 
 * 
 * @param Row Placement 8
 * @desc The row where this text entry should be inserted.
 * Parameter placement will be adjusted accordingly.
 * @default 
 *
 * @param Group Columns 8
 * @desc The column(s) in which the text should be inserted.
 * Columns must be adjacent.
 * @default  
 *
 * @param ---Page Header 9--- 
 * @desc Any "grouping" with a blank row placement will not be used.
 * @default
 *
 * @param Grouping Title 9
 * @desc A raw text entry to print on the param page.
 * Can be left blank to create empty space.
 * @default 
 * 
 * @param Row Placement 9
 * @desc The row where this text entry should be inserted.
 * Parameter placement will be adjusted accordingly.
 * @default 
 *
 * @param Group Columns 9
 * @desc The column(s) in which the text should be inserted.
 * Columns must be adjacent.
 * @default  
 *
 * @param ---Page Header 10--- 
 * @desc Any "grouping" with a blank row placement will not be used.
 * @default
 *
 * @param Grouping Title 10
 * @desc A raw text entry to print on the param page.
 * Can be left blank to create empty space.
 * @default 
 * 
 * @param Row Placement 10
 * @desc The row where this text entry should be inserted.
 * Parameter placement will be adjusted accordingly.
 * @default 
 *
 * @param Group Columns 10
 * @desc The column(s) in which the text should be inserted.
 * Columns must be adjacent.
 * @default  
 *
 *
 * @param ---Extended Params---
 * @default
 *
 * @param Parameter 1 Symbol
 * @desc The system abbreviation for parameter #1.
 * Default: 
 * @default 
 *
 * @param Parameter 1 Name
 * @desc The text name of parameter #1.
 * Default:          - leave blank to use the database's entry.
 * @default 
 *
 * @param Parameter 1 as %
 * @desc true - parameter should be displayed as a percent.
 * false - otherwise.
 * Default: 
 * @default 
 * 
 * @param Parameter 2 Symbol
 * @desc The system abbreviation for parameter #2.
 * Default: 
 * @default 
 *
 * @param Parameter 2 Name
 * @desc The text name of parameter #2.
 * Default:          - leave blank to use the database's entry.
 * @default
 *
 * @param Parameter 2 as %
 * @desc true - parameter should be displayed as a percent.
 * false - otherwise.
 * Default: 
 * @default 
 * 
 * @param Parameter 3 Symbol
 * @desc The system abbreviation for parameter #3.
 * Default: 
 * @default 
 *
 * @param Parameter 3 Name
 * @desc The text name of parameter #3.
 * Default:          - leave blank to use the database's entry.
 * @default 
 *
 * @param Parameter 3 as %
 * @desc true - parameter should be displayed as a percent.
 * false - otherwise.
 * Default: 
 * @default 
 * 
 * @param Parameter 4 Symbol
 * @desc The system abbreviation for parameter #4.
 * Default: 
 * @default 
 *
 * @param Parameter 4 Name
 * @desc The text name of parameter #4.
 * Default:          - leave blank to use the database's entry.
 * @default  
 *
 * @param Parameter 4 as %
 * @desc true - parameter should be displayed as a percent.
 * false - otherwise.
 * Default: 
 * @default 
 * 
 * @param Parameter 5 Symbol
 * @desc The system abbreviation for parameter #5.
 * Default: 
 * @default 
 *
 * @param Parameter 5 Name
 * @desc The text name of parameter #5.
 * Default:          - leave blank to use the database's entry.
 * @default  
 *
 * @param Parameter 5 as %
 * @desc true - parameter should be displayed as a percent.
 * false - otherwise.
 * Default: 
 * @default 
 * 
 * @param Parameter 6 Symbol
 * @desc The system abbreviation for parameter #6.
 * Default: 
 * @default 
 *
 * @param Parameter 6 Name
 * @desc The text name of parameter #6.
 * Default:          - leave blank to use the database's entry.
 * @default 
 *
 * @param Parameter 6 as %
 * @desc true - parameter should be displayed as a percent.
 * false - otherwise.
 * Default: 
 * @default 
 * 
 * @param Parameter 7 Symbol
 * @desc The system abbreviation for parameter #7.
 * Space = blank. 
 * @default 
 *
 * @param Parameter 7 Name
 * @desc The text name of parameter #7.
 * Default:          - leave blank to use the database's entry.
 *
 * @default   
 *
 * @param Parameter 7 as %
 * @desc true - parameter should be displayed as a percent.
 * false - otherwise.
 * Default: 
 * @default 
 * 
 * @param Parameter 8 Symbol
 * @desc The system abbreviation for parameter #8.
 * Default: 
 * @default 
 *
 * @param Parameter 8 Name
 * @desc The text name of parameter #8.
 * Default:          - leave blank to use the database's entry.
 * @default
 *
 * @param Parameter 8 as %
 * @desc true - parameter should be displayed as a percent.
 * false - otherwise.
 * Default: 
 * @default 
 * 
 * @param Parameter 9 Symbol
 * @desc The system abbreviation for parameter #9.
 * Default: 
 * @default 
 *
 * @param Parameter 9 Name
 * @desc The text name of parameter #9.
 * Default:          
 * @default
 *
 * @param Parameter 9 as %
 * @desc true - parameter should be displayed as a percent.
 * false - otherwise.
 * Default: 
 * @default 
 * 
 * @param Parameter 10 Symbol
 * @desc The system abbreviation for parameter #10.
 * Space = blank. 
 * @default 
 *
 * @param Parameter 10 Name
 * @desc The text name of parameter #10.
 * Default:          
 * @default
 *
 * @param Parameter 10 as %
 * @desc true - parameter should be displayed as a percent.
 * false - otherwise.
 * Default: 
 * @default 
 * 
 * @param Parameter 11 Symbol
 * @desc The system abbreviation for parameter #11.
 * Space = blank.
 * @default 
 *
 * @param Parameter 11 Name
 * @desc The text name of parameter #11.
 * Default:          
 * @default
 *
 * @param Parameter 11 as %
 * @desc true - parameter should be displayed as a percent.
 * false - otherwise.
 * Default: 
 * @default 
 * 
 * @param Parameter 12 Symbol
 * @desc The system abbreviation for parameter #12.
 * Space = blank.
 * @default 
 *
 * @param Parameter 12 Name
 * @desc The text name of parameter #12.
 * Default:          
 * @default
 *
 * @param Parameter 12 as %
 * @desc true - parameter should be displayed as a percent.
 * false - otherwise.
 * Default: 
 * @default 
 * 
 * @param Parameter 13 Symbol
 * @desc The system abbreviation for parameter #13.
 * Space = blank.
 * @default 
 *
 * @param Parameter 13 Name
 * @desc The text name of parameter #13.
 * Default:          
 * @default
 *
 * @param Parameter 13 as %
 * @desc true - parameter should be displayed as a percent.
 * false - otherwise.
 * Default: 
 * @default 
 * 
 * @param Parameter 14 Symbol
 * @desc The system abbreviation for parameter #14.
 * Space = blank.
 * @default 
 *
 * @param Parameter 14 Name
 * @desc The text name of parameter #14.
 * Default:          
 * @default
 *
 * @param Parameter 14 as %
 * @desc true - parameter should be displayed as a percent.
 * false - otherwise.
 * Default: 
 * @default 
 * 
 * @param Parameter 15 Symbol
 * @desc The system abbreviation for parameter #15.
 * Space = blank.
 * @default 
 *
 * @param Parameter 15 Name
 * @desc The text name of parameter #15.
 * Default:          
 * @default
 *
 * @param Parameter 15 as %
 * @desc true - parameter should be displayed as a percent.
 * false - otherwise.
 * Default: 
 * @default 
 * 
 * @param Parameter 16 Symbol
 * @desc The system abbreviation for parameter #16.
 * Space = blank.
 * @default 
 *
 * @param Parameter 16 Name
 * @desc The text name of parameter #16.
 * Default:          
 * @default
 *
 * @param Parameter 16 as %
 * @desc true - parameter should be displayed as a percent.
 * false - otherwise.
 * Default: 
 * @default 
 * 
 * @param Parameter 17 Symbol
 * @desc The system abbreviation for parameter #17.
 * Space = blank.
 * @default 
 *
 * @param Parameter 17 Name
 * @desc The text name of parameter #17.
 * Default:          
 * @default
 *
 * @param Parameter 17 as %
 * @desc true - parameter should be displayed as a percent.
 * false - otherwise.
 * Default: 
 * @default 
 * 
 * @param Parameter 18 Symbol
 * @desc The system abbreviation for parameter #18.
 * Space = blank.
 * @default 
 *
 * @param Parameter 18 Name
 * @desc The text name of parameter #18.
 * Default:          
 * @default
 *
 * @param Parameter 18 as %
 * @desc true - parameter should be displayed as a percent.
 * false - otherwise.
 * Default: 
 * @default 
 * 
 * @param Parameter 19 Symbol
 * @desc The system abbreviation for parameter #19.
 * Default: 
 * @default 
 *
 * @param Parameter 19 Name
 * @desc The text name of parameter #19.
 * Default:          
 * @default
 *
 * @param Parameter 19 as %
 * @desc true - parameter should be displayed as a percent.
 * false - otherwise.
 * Default: 
 * @default 
 * 
 * @param Parameter 20 Symbol
 * @desc The system abbreviation for parameter #20.
 * Space = blank.
 * @default 
 *
 * @param Parameter 20 Name
 * @desc The text name of parameter #20.
 * Default:          
 * @default
 *
 * @param Parameter 20 as %
 * @desc true - parameter should be displayed as a percent.
 * false - otherwise.
 * Default: 
 * @default 
 * 
 * @param Parameter 21 Symbol
 * @desc The system abbreviation for parameter #21.
 * Space = blank.
 * @default 
 *
 * @param Parameter 21 Name
 * @desc The text name of parameter #21.
 * Default:          
 * @default
 *
 * @param Parameter 21 as %
 * @desc true - parameter should be displayed as a percent.
 * false - otherwise.
 * Default: 
 * @default 
 * 
 * @param Parameter 22 Symbol
 * @desc The system abbreviation for parameter #22.
 * Space = blank.
 * @default 
 *
 * @param Parameter 22 Name
 * @desc The text name of parameter #22.
 * Default:          
 * @default
 *
 * @param Parameter 22 as %
 * @desc true - parameter should be displayed as a percent.
 * false - otherwise.
 * Default: 
 * @default 
 * 
 * @param Parameter 23 Symbol
 * @desc The system abbreviation for parameter #23.
 * Space = blank. 
 * @default 
 *
 * @param Parameter 23 Name
 * @desc The text name of parameter #23.
 * Default:          
 * @default
 *
 * @param Parameter 23 as %
 * @desc true - parameter should be displayed as a percent.
 * false - otherwise.
 * Default: 
 * @default 
 * 
 * @param Parameter 24 Symbol
 * @desc The system abbreviation for parameter #24.
 * Space = blank.
 * @default 
 *
 * @param Parameter 24 Name
 * @desc The text name of parameter #24.
 * Default:          
 * @default
 *
 * @param Parameter 24 as %
 * @desc true - parameter should be displayed as a percent.
 * false - otherwise.
 * Default: 
 * @default 
 * 
 * @param Parameter 25 Symbol
 * @desc The system abbreviation for parameter #25.
 * Space = blank.
 * @default 
 *
 * @param Parameter 25 Name
 * @desc The text name of parameter #25.
 * Default:          
 * @default
 *
 * @param Parameter 25 as %
 * @desc true - parameter should be displayed as a percent.
 * false - otherwise.
 * Default: 
 * @default 
 * 
 * @param Parameter 26 Symbol
 * @desc The system abbreviation for parameter #26.
 * Space = blank.
 * @default 
 *
 * @param Parameter 26 Name
 * @desc The text name of parameter #26.
 * Default:          
 * @default
 *
 * @param Parameter 26 as %
 * @desc true - parameter should be displayed as a percent.
 * false - otherwise.
 * Default: 
 * @default 
 * 
 * @param Parameter 27 Symbol
 * @desc The system abbreviation for parameter #27.
 * Space = blank.
 * @default 
 *
 * @param Parameter 27 Name
 * @desc The text name of parameter #27.
 * Default:          
 * @default
 *
 * @param Parameter 27 as %
 * @desc true - parameter should be displayed as a percent.
 * false - otherwise.
 * Default: 
 * @default 
 * 
 * @param Parameter 28 Symbol
 * @desc The system abbreviation for parameter #28.
 * Space = blank.
 * @default 
 *
 * @param Parameter 28 Name
 * @desc The text name of parameter #28.
 * Default:          
 * @default
 *
 * @param Parameter 28 as %
 * @desc true - parameter should be displayed as a percent.
 * false - otherwise.
 * Default: 
 * @default 
 * 
 * @param Parameter 29 Symbol
 * @desc The system abbreviation for parameter #29.
 * Space = blank.
 * @default 
 *
 * @param Parameter 29 Name
 * @desc The text name of parameter #29.
 * Default:          
 * @default
 *
 * @param Parameter 29 as %
 * @desc true - parameter should be displayed as a percent.
 * false - otherwise.
 * Default: 
 * @default 
 * 
 * @param Parameter 30 Symbol
 * @desc The system abbreviation for parameter #30.
 * Space = blank.
 * @default 
 *
 * @param Parameter 30 Name
 * @desc The text name of parameter #30.
 * Default:          
 * @default
 *
 * @param Parameter 30 as %
 * @desc true - parameter should be displayed as a percent.
 * false - otherwise.
 * Default: 
 * @default 
 * 
 * @param Parameter 31 Symbol
 * @desc The system abbreviation for parameter #31.
 * Space = blank. 
 * @default 
 *
 * @param Parameter 31 Name
 * @desc The text name of parameter #31.
 * Default:          
 * @default
 *
 * @param Parameter 31 as %
 * @desc true - parameter should be displayed as a percent.
 * false - otherwise.
 * Default: 
 * @default 
 * 
 * @param Parameter 32 Symbol
 * @desc The system abbreviation for parameter #32.
 * Space = blank. 
 * @default 
 *
 * @param Parameter 32 Name
 * @desc The text name of parameter #32.
 * Default:          
 * @default
 *
 * @param Parameter 32 as %
 * @desc true - parameter should be displayed as a percent.
 * false - otherwise.
 * Default: 
 * @default 
 * 
 * @param Parameter 33 Symbol
 * @desc The system abbreviation for parameter #33.
 * Space = blank.
 * @default 
 *
 * @param Parameter 33 Name
 * @desc The text name of parameter #33.
 * Default:          
 * @default
 *
 * @param Parameter 33 as %
 * @desc true - parameter should be displayed as a percent.
 * false - otherwise.
 * Default: 
 * @default 
 * 
 * @param Parameter 34 Symbol
 * @desc The system abbreviation for parameter #34.
 * Space = blank.
 * @default 
 *
 * @param Parameter 34 Name
 * @desc The text name of parameter #34.
 * Default:          
 * @default
 *
 * @param Parameter 34 as %
 * @desc true - parameter should be displayed as a percent.
 * false - otherwise.
 * Default: 
 * @default 
 * 
 * @param Parameter 35 Symbol
 * @desc The system abbreviation for parameter #35.
 * Space = blank.
 * @default 
 *
 * @param Parameter 35 Name
 * @desc The text name of parameter #35.
 * Default:          
 * @default
 *
 * @param Parameter 35 as %
 * @desc true - parameter should be displayed as a percent.
 * false - otherwise.
 * Default: 
 * @default 
 * 
 * @param Parameter 36 Symbol
 * @desc The system abbreviation for parameter #36.
 * Space = blank.
 * @default 
 *
 * @param Parameter 36 Name
 * @desc The text name of parameter #36.
 * Default:          
 * @default
 *
 * @param Parameter 36 as %
 * @desc true - parameter should be displayed as a percent.
 * false - otherwise.
 * Default: 
 * @default 
 * 
 * @param Parameter 37 Symbol
 * @desc The system abbreviation for parameter #37.
 * Space = blank.
 * @default 
 *
 * @param Parameter 37 Name
 * @desc The text name of parameter #37.
 * Default:          
 * @default
 *
 * @param Parameter 37 as %
 * @desc true - parameter should be displayed as a percent.
 * false - otherwise.
 * Default: 
 * @default 
 * 
 * @param Parameter 38 Symbol
 * @desc The system abbreviation for parameter #38.
 * Space = blank. 
 * @default 
 *
 * @param Parameter 38 Name
 * @desc The text name of parameter #38.
 * Default:          
 * @default
 *
 * @param Parameter 38 as %
 * @desc true - parameter should be displayed as a percent.
 * false - otherwise.
 * Default: 
 * @default 
 * 
 * @param Parameter 39 Symbol
 * @desc The system abbreviation for parameter #39.
 * Space = blank.
 * @default 
 *
 * @param Parameter 39 Name
 * @desc The text name of parameter #39.
 * Default:          
 * @default
 *
 * @param Parameter 39 as %
 * @desc true - parameter should be displayed as a percent.
 * false - otherwise.
 * Default: 
 * @default 
 * 
 * @param Parameter 40 Symbol
 * @desc The system abbreviation for parameter #40.
 * Space = blank.
 * @default 
 *
 * @param Parameter 40 Name
 * @desc The text name of parameter #40.
 * Default:          
 * @default
 *
 * @param Parameter 40 as %
 * @desc true - parameter should be displayed as a percent.
 * false - otherwise.
 * Default: 
 * @default 
 * 
 * @param Parameter 41 Symbol
 * @desc The system abbreviation for parameter #41.
 * Space = blank.
 * @default 
 *
 * @param Parameter 41 Name
 * @desc The text name of parameter #41.
 * Default:          
 * @default
 *
 * @param Parameter 41 as %
 * @desc true - parameter should be displayed as a percent.
 * false - otherwise.
 * Default: 
 * @default 
 * 
 * @param Parameter 42 Symbol
 * @desc The system abbreviation for parameter #42.
 * Space = blank.
 * @default 
 *
 * @param Parameter 42 Name
 * @desc The text name of parameter #42.
 * Default:          
 * @default
 *
 * @param Parameter 42 as %
 * @desc true - parameter should be displayed as a percent.
 * false - otherwise.
 * Default: 
 * @default 
 * 
 * @param Parameter 43 Symbol
 * @desc The system abbreviation for parameter #43.
 * Space = blank.
 * @default 
 *
 * @param Parameter 43 Name
 * @desc The text name of parameter #43.
 * Default:          
 * @default
 *
 * @param Parameter 43 as %
 * @desc true - parameter should be displayed as a percent.
 * false - otherwise.
 * Default: 
 * @default 
 * 
 * @param Parameter 44 Symbol
 * @desc The system abbreviation for parameter #44.
 * Space = blank.
 * @default 
 *
 * @param Parameter 44 Name
 * @desc The text name of parameter #44.
 * Default:          
 * @default
 *
 * @param Parameter 44 as %
 * @desc true - parameter should be displayed as a percent.
 * false - otherwise.
 * Default: 
 * @default 
 * 
 * @param Parameter 45 Symbol
 * @desc The system abbreviation for parameter #45.
 * Space = blank. 
 * @default 
 *
 * @param Parameter 45 Name
 * @desc The text name of parameter #45.
 * Default:          
 * @default
 *
 * @param Parameter 45 as %
 * @desc true - parameter should be displayed as a percent.
 * false - otherwise.
 * Default: 
 * @default 
 * 
 * @param Parameter 46 Symbol
 * @desc The system abbreviation for parameter #46.
 * Space = blank.
 * @default 
 *
 * @param Parameter 46 Name
 * @desc The text name of parameter #46.
 * Default:          
 * @default
 *
 * @param Parameter 46 as %
 * @desc true - parameter should be displayed as a percent.
 * false - otherwise.
 * Default: 
 * @default 
 * 
 * @param Parameter 47 Symbol
 * @desc The system abbreviation for parameter #47.
 * Space = blank. 
 * @default 
 *
 * @param Parameter 47 Name
 * @desc The text name of parameter #47.
 * Default:          
 * @default
 *
 * @param Parameter 47 as %
 * @desc true - parameter should be displayed as a percent.
 * false - otherwise.
 * Default: 
 * @default 
 * 
 * @param Parameter 48 Symbol
 * @desc The system abbreviation for parameter #48.
 * Space = blank.
 * @default 
 *
 * @param Parameter 48 Name
 * @desc The text name of parameter #48.
 * Default:          
 * @default
 *
 * @param Parameter 48 as %
 * @desc true - parameter should be displayed as a percent.
 * false - otherwise.
 * Default: 
 * @default 
 * 
 * @param ---Param Formatting---
 * @default
 *
 * @param Params in Col 1
 * @desc The number of parameters to list in the first column.
 * Default: 9
 * @default 9
 *
 * @param Column 1 Text Width
 * @desc Width (pixels) alloted to column 1's parameter names.
 * Default: 160
 * @default 160
 * 
 * @param Column 1 Value Width
 * @desc Width (pixels) alloted to column 1's parameter values.
 * Default: 60
 * @default 60
 * 
 * @param Params in Col 2
 * @desc The number of parameters to list in the second column.
 * If zero or blank, all parameters will be listed in a single column.
 * Default: 0
 * @default 0
 *
 * @param Column 2 Text Width
 * @desc Width (pixels) alloted to column 2's parameter names.
 * Default: 160
 * @default 160
 * 
 * @param Column 2 Value Width
 * @desc Width (pixels) alloted to column 2's parameter values.
 * Default: 60
 * @default 60
 * 
 * @param Params in Col 3
 * @desc The number of parameters to list in the third column.
 * Zero hides the column.
 * Default: 0
 * @default 0
 *
 * @param Column 3 Text Width
 * @desc Width (pixels) alloted to column 3's parameter names.
 * Default: 160
 * @default 160
 * 
 * @param Column 3 Value Width
 * @desc Width (pixels) alloted to column 3's parameter values.
 * Default: 60
 * @default 60
 * 
 * @param Display Equips?
 * @desc This can use the base plugin's setting if left empty, or can be set independently. (true/false)
 * Default: 
 * @default 
 *
 * @param Equip Column Width
 * @desc Width (pixels) for equipment listings on pages if shown.
 * Default: 320
 * @default 320
 *
 * @param pdr/mdr as Resists
 * @desc Treat the mdr and mdr parameters as elemental resistances when they appear on the Parameter page.
 * @default
 *
 * @param Rebalance Emptiness
 * @desc If not all parameters on a line are blank, recenter the arrangement of those present.
 * @default true
 *
 *
 * @help 
 * ============================================================================
 * Introduction
 * ============================================================================
 * 
 * For those who would like to have extra super-customizable Status pages for use
 * with JahwsUF's StatusMenuCore plugin, this provides all the essentials for one
 * page.  It relies upon the general settings set by StatusMenuCore and has
 * similar default behaviors.
 *
 * Note that in order to activate the page, you'll need to manually add the following
 * one of the StatusMenuCore's "Page # Window" options:
 *
 * JAH_Window_Status_Params
 *
 * (This plugin reuses the base window from StatusMenuCore, looking for the next pageId's
 *  information to construct the new page.)
 *
 * Should you desire extra copies of this window, simply make a copy of this plugin file and
 * ensure that the change in plugin name is reflected in the variable at the top of the plugin.
 * Unfortunately, the RPG Maker MX plugin manager won't actually reload a plugin if it sees
 * its name a second time.  (The change in name is literally the only thing required; I've
 * streamlined the process as much as possible without changing the built-in PluginManager.)
 *
 * ============================================================================
 * How to Use This Plugin
 * ============================================================================
 *
 *
 * Extended Parameters
 * ===================
 * Rather than assume that you always want the parameters listed in a specific
 * order, this plugin allows you to choose what order all parameters are listed
 * in.  This is also helpful to allow some degree of control of how they're 
 * arranged on the screen.
 *
 * By default, RPG Maker doesn't provide any in-text names or abbreviations for
 * many extended or special parameters.  As a result, you need to specify these
 * values for any such additional parameters.  If left blank, this plugin will
 * attempt to find the names and abbreviations from the database's TextManager,
 * which will succeed for the basic parameters.
 *
 * Table of built-in parameters:
 *
 * ==========================================
 * | Symbol |      Name       | %age-based? |
 * ==========================================
 * | atk    | Attack          | false       |
 * | def    | Defense         | false       |
 * | mat    | M.Attack        | false       |
 * | mdf    | M.Defense       | false       |
 * | agi    | Agility         | false       |
 * | luk    | Luck            | false       |
 * ==========================================
 * | hit    | Hit Rate        | true        |
 * | eva    | Evasion         | true        |
 * | cri    | Critical Rate   | true        |
 * | cev    | Crit Evasion    | true        |
 * | mev    | Magic Evasion   | true        |
 * | mrf    | M. Reflection   | true        |
 * | cnt    | Counterattack   | true        |
 * | hrg    | HP Regen Rate   | true        |
 * | mrg    | MP Regen Rate   | true        |
 * | trg    | TP Regen Rate   | true        |
 * ==========================================
 * | tgr    | Target Rate     | true        |
 * | grd    | Guard Effect    | true        |
 * | rec    | Recovery Effect | true        |
 * | pha    | Pharmacology    | true        |
 * | mcr    | MP Cost Rate    | true        |
 * | tcr    | TP Cost Rate    | true        |
 * | pdr    | Phys Damage %   | true        |
 * | mdr    | Magic Damage %  | true        |
 * | fdr    | Floor Damage %  | true        |
 * | exr    | Exp Gain Rate   | true        |
 * ==========================================
 * 
 * Additionally, you can control how the Parameter page is organized through
 * the "Param Formatting" options.  The parameters may be listed on their
 * respective page in up to three columns, and each column may independently
 * be given a different length and width for its information in order to
 * fine-tune the page's visual appearance.  The default values provided
 * match those used by default for the original parameters in the vanilla
 * version of the Status window.
 *
 * If any parameter location has a blank symbol, it will be interpreted as a blank
 * to be left on the parameter page and will be counted as one of the parameters in
 * its column.  This allows you to create visual groupings of parameters should you so desire.
 *
 * Note that assigning any column 0 parameters hides that column and those
 * after it.
 *
 * Want even more options with this?
 *
 * In place of a symbol, you can use elementRate(1) - with 1 being the element's ID here -
 * to put elemental rate data on the parameters page.  Likewise, stateRate(1) - with 1 as
 * the state's ID - will put state rate / resistance data on the parameters page in that slot.
 *
 * For both of these, the name will be autodetected if left blank.
 * Furthermore, if you leave the "Parameter # as %" option blank, it will
 * default to the global setting for elements or states set toward the bottom
 * of the options.
 *
 * You can select whether or not the value/category (again, global option) is
 * centered or right-aligned via option.  This can be set differently for elements and
 * states as a group, but not individually.  (If not centered, they will be right-aligned.)
 *
 *
 * Param Groupings
 * ==================
 * A new feature in 2.0.0 is the ability to use header grouping titles.
 * You can now put raw text within the parameter page for extra organization.
 * The row you specify is the row at which the text will be placed; all parameters
 * will shift around it, adjusting their rows instead.  No header titles will be
 * moved.
 * 
 * Another new feature is the ability to have any row with blanks in one or more columns
 * to be recentered, visually filling in the holes as a result.  This can give the
 * effect of having extra columns.
 *
 * If you enable this option, but wish to preserve a particular blank or two, you
 * can insert empty headers in that location to preserve the space; just remember
 * that all parameters afterward will be offset.
 *
 */ 


 //=============== START PARAMETER INITIALIZATION ===========================


// Keep all local variables in here as purely local.
// Used to obtain and initialize all plugin parameters.
(function() {

// For the core plugin, the page ID is automatically set, rather than read from the plugin.

var paramPageId = Number(PluginManager.parameters(JahwsUF.CurrentPluginName)['Page ID']);

if(paramPageId == undefined || paramPageId <= 0)
	throw new Error("Invalid page ID setting for the Status Menu Bonus Page.  Cannot continue loading.");


JahwsUF.StatusMenuCore.BonusPage = [];
JahwsUF.StatusMenuCore.BonusPage[paramPageId] = {};
JahwsUF.StatusMenuCore.BonusPage[paramPageId].Parameters = PluginManager.parameters(JahwsUF.CurrentPluginName);

// For extra parameter pages - a plugin extension.
// Each parameter page will store its data in the array under its own page ID.
// The page will be constructed from a base window class that takes in the ID,
// making the copied code in the extension absolutely minimal.

JahwsUF.StatusMenuCore.Param.ParamPages[paramPageId]        = {};

// Column data is implied with the data storage pattern here.
JahwsUF.StatusMenuCore.Param.ParamPages[paramPageId].Columns       = [];
JahwsUF.StatusMenuCore.Param.ParamPages[paramPageId].ColWidths     = [];

// JahwsUF.StatusMenuCore.Param.ParamPages[paramPageId].Columns[i].TextWidth
// JahwsUF.StatusMenuCore.Param.ParamPages[paramPageId].Columns[i].ValueWidth
// JahwsUF.StatusMenuCore.Param.ParamPages[paramPageId].Columns[i].Entries = [];  // Entries will contain special organization objects!
// JahwsUF.StatusMenuCore.Param.ParamPages[paramPageId].DisplayEquips


// Param column formatting data.

var colCount = 1;
var column = {};

var totalColumnWidths = 0;
var MaxColumnLength = 0;
 
for (var i = 1; i <= JahwsUF.StatusMenuCore.Constants.MaxPageColumns; i++)
{
	var line = "Number(JahwsUF.StatusMenuCore.BonusPage[paramPageId].Parameters['Params in Col " + i + "'])";
	var count = eval(line);
	
	if(count == '' || count == undefined || isNaN(count))
	{
		if(i == 1) count = 8;
		else count = 0;
	}
	
	if(count > MaxColumnLength) MaxColumnLength = count;
	
	line = "Number(JahwsUF.StatusMenuCore.BonusPage[paramPageId].Parameters['Column " + i + " Text Width'])";
	var textWidth = eval(line);
	
	if(textWidth == '' || textWidth == undefined || isNaN(textWidth))
	{
		textWidth = 160;
	}
	
	line = "Number(JahwsUF.StatusMenuCore.BonusPage[paramPageId].Parameters['Column " + i + " Value Width'])";
	var valWidth = eval(line);
	
	if(valWidth == '' || valWidth == undefined || isNaN(valWidth))
	{
		valWidth = 60;
	}
	
	column.Size = count;
	column.TextWidth = textWidth;
	column.ValueWidth = valWidth;
	column.Entries = [];
	
	if(count == 0)
	{
		break;
	}
	else 
	{
		JahwsUF.StatusMenuCore.Param.ParamPages[paramPageId].Columns[i-1] = column;
		column = {};
		
		colCount = i;		
		totalColumnWidths += textWidth + valWidth;
	}
}

// Display equipment options.

JahwsUF.StatusMenuCore.Param.ParamPages[paramPageId].DisplayEquips = JahwsUF.StatusMenuCore.BonusPage[paramPageId].Parameters['Display Equips?'];

if(JahwsUF.StatusMenuCore.Param.ParamPages[paramPageId].DisplayEquips == undefined || JahwsUF.StatusMenuCore.Param.ParamPages[paramPageId].DisplayEquips == "")
	JahwsUF.StatusMenuCore.Param.ParamPages[paramPageId].DisplayEquips = JahwsUF.StatusMenuCore.Param.DisplayEquips;  // Use the base plugin's setting.


var equipWidth = Number(JahwsUF.StatusMenuCore.BonusPage[paramPageId].Parameters['Equip Column Width']);

if(equipWidth == '' || equipWidth == undefined || isNaN(equipWidth))
{
	equipWidth = 320;
}

JahwsUF.StatusMenuCore.Param.ParamPages[paramPageId].EquipColumnWidth = equipWidth;
JahwsUF.StatusMenuCore.Param.ParamPages[paramPageId].RequiredColumnWidth = totalColumnWidths;

var pdr_mdr_asResists = eval(JahwsUF.StatusMenuCore.BonusPage[paramPageId].Parameters['pdr/mdr as Resists']);

if(pdr_mdr_asResists === undefined)
	pdr_mdr_asResists = eval(JahwsUF.StatusMenuCore.Parameters['pdr/mdr as Resists']);  // If not entered, reuse the base plugin's setting.

if(pdr_mdr_asResists != true)
	pdr_mdr_asResists = false;

var rebalance = eval(JahwsUF.StatusMenuCore.BonusPage[paramPageId].Parameters['Rebalance Emptiness']);

if(rebalance != true)
	rebalance = false;
JahwsUF.StatusMenuCore.Param.ParamPages[paramPageId].RebalanceColumns = rebalance;

// --------------------------------------------------

// Read in parameter grouping title spec data.

var GroupingTitles = [];
var GroupingRows = [];
var GroupingCols = [];

var pageSpecs = JahwsUF.StatusMenuCore.Param.ParamPages[paramPageId];

for (var i = 1; i <= JahwsUF.StatusMenuCore.Constants.MaxPageGroupings; i++)
{
	GroupingTitles[i] = JahwsUF.StatusMenuCore.BonusPage[paramPageId].Parameters['Grouping Title ' + i];
	
	GroupingRows[i] = Number(JahwsUF.StatusMenuCore.BonusPage[paramPageId].Parameters['Row Placement ' + i]);
	if(!GroupingRows[i])
		GroupingRows[i] = undefined;
	else GroupingRows[i]--;
	
	var colSpec = JahwsUF.StatusMenuCore.BonusPage[paramPageId].Parameters['Group Columns ' + i ];
	
	if(colSpec && colSpec.trim() != "")
	{
		line = '[' + colSpec + ']';
		
		GroupingCols[i] = eval(line);
		
		// Validate the column data.
		for(var j = 1; j < GroupingCols[i].length; j++)
		{
			if(GroupingCols[i][j] != GroupingCols[i][0] + j)
				throw "Columns to be grouped on the Status window Parameter page must be adjacent!";
		}
		
		for(var j = 0; j < GroupingCols[i].length; j++)
		{
			GroupingCols[i][j]--;
		}
	}
	
	// If we actually are declaring a header grouping.
	if(GroupingRows[i] != undefined)
	{
		var entry = new JAH_StatusMenuCore_HeaderEntry(GroupingTitles[i], GroupingCols[i], pageSpecs);
		pageSpecs.Columns[GroupingCols[i][0]].Entries[GroupingRows[i]] = entry;
		
		for(var j = 1; j < GroupingCols[i].length; j++)
		{
			var c = GroupingCols[i][j];
			if(pageSpecs.Columns[c]!=undefined){
				pageSpecs.Columns[c].Entries[GroupingRows[i]] = new JAH_StatusMenuCore_BlankEntry();
			}
		}
	}
}

// Analyze the text grouping headers and pre-compute any needed adjustments to param entry placement.

var EntryMapping = [];
var colWidths = JahwsUF.StatusMenuCore.Param.ParamPages[paramPageId].ColWidths;

for(var c = 0; c < pageSpecs.Columns.length; c++)
{
	EntryMapping[c] = [];
	var row = 0;
	
	for(var r = 0; row < pageSpecs.Columns[c].Size; r++)
	{
		if(pageSpecs.Columns[c].Entries[r] === undefined)
		{
			EntryMapping[c][row] = r;
			row++;
		}
		else 
		{
			colWidths[r] = (colWidths[r] || 0) + 1;
			continue;
		}
	}
}
 
// Read in parameter specification data.

var totalParams = 0;
var columnPlacement = 0;
var rowPlacement = 0;

var i = 1;

for (var columnPlacement = 0; columnPlacement < JahwsUF.StatusMenuCore.Param.ParamPages[paramPageId].Columns.length; columnPlacement++) {

	var currentColumn = JahwsUF.StatusMenuCore.Param.ParamPages[paramPageId].Columns[columnPlacement];

	for (var row = 0; row < currentColumn.Size; row++) {
		
		var line = "JahwsUF.StatusMenuCore.BonusPage[paramPageId].Parameters['Parameter " + i + " Symbol']";
		var symbol = eval(line);
		line = "JahwsUF.StatusMenuCore.BonusPage[paramPageId].Parameters['Parameter " + i + " Name']";
		var name = eval(line);
		line = "JahwsUF.StatusMenuCore.BonusPage[paramPageId].Parameters['Parameter " + i + " as %']";
		var percent = eval(eval(line));
	  
		// Undefined = blank space on the parameter page.
		if(symbol == '')
			symbol = undefined;
			
		if(!(symbol == undefined))
		{
			if(symbol.trim() == "")
				symbol = undefined;
		}
		
		var rowPlacement = EntryMapping[columnPlacement][row];
	  
		if(symbol)
		{
			if(symbol.indexOf("elementRate") != -1)
			{
				currentColumn.Entries[rowPlacement] = new JAH_StatusMenuCore_ResistEntry(symbol, name, percent, currentColumn.TextWidth, currentColumn.ValueWidth, JahwsUF.StatusMenuCore.Param.CenterEleValues ? 'center' : 'right');
			}
			else if(pdr_mdr_asResists && (symbol == "pdr" || symbol == "mdr"))
			{
				currentColumn.Entries[rowPlacement] = new JAH_StatusMenuCore_ResistEntry(symbol, name, percent, currentColumn.TextWidth, currentColumn.ValueWidth, JahwsUF.StatusMenuCore.Param.CenterEleValues ? 'center' : 'right');
			}
			else if(symbol.indexOf("stateRate") != -1)
			{
				currentColumn.Entries[rowPlacement] = new JAH_StatusMenuCore_ResistEntry(symbol, name, percent, currentColumn.TextWidth, currentColumn.ValueWidth, JahwsUF.StatusMenuCore.Param.CenterStateValues ? 'center' : 'right');
			}
			else 
			{
				if(percent == undefined)
					percent = true;
				
				currentColumn.Entries[rowPlacement] = new JAH_StatusMenuCore_ParamEntry(symbol, name, percent, currentColumn.TextWidth, currentColumn.ValueWidth);
			}
			
			colWidths[rowPlacement] = (colWidths[rowPlacement] || 0) + 1;
		}
		
		totalParams++;
		i++;
	}
}

}());