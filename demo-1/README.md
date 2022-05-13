# typescript Install TypeScript using NPM
TypeScript

# To install or update the latest version of TypeScript, open command prompt/terminal and type the following command:
    
    npm install -g typescript

# The above command will install TypeScript globally so that you can use it in any project. Check the installed version of TypeScript using the following command:
    
    tsc -v

# Execute the following command to install the TypeScript to your local project as dev dependency.
    
    npm install typescript --save-dev

# TypeScript - Type Annotations 

    TypeScript is a typed language, where we can specify the type of the variables, function parameters and object properties. We can specify the type using :Type after the name of the variable, parameter or property. There can be a space after the colon. TypeScript includes all the primitive types of JavaScript- number, string and boolean. 

    Example: Type Annotation in TypeScript

    var age: number = 32; // number variable
    var name: string = "John";// string variable
    var isUpdated: boolean = true;// Boolean variable


# First TypeScript Program: Compile and Run

    tsc <file_name>.ts
    
        PS F:\rkittrainings\typescript\demo-1\type-annotations> tsc .\employee.ts
        PS F:\rkittrainings\typescript\demo-1\type-annotations> node .\employee.js
        setEmployee :: Id = 100, Name = Potannagari Ravikumar
        getEmployee :: Id = 100, Name = Potannagari Ravikumar
        display:: Id = 100, Name = Ravikumar
        PS F:\rkittrainings\typescript\demo-1\type-annotations> 
