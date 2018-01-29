/*
  'Object.prototype.toString' will do all safe checks for us and give the 'variable' constructor.
  Example:
    getInstance()                =>  "Undefined"
    getInstance(  undefined   )  =>  "Undefined"
    getInstance(     null     )  =>  "Null"
    getInstance(     true     )  =>  "Boolean"
    getInstance(      ''      )  =>  "String"
    getInstance(       1      )  =>  "Number"
    getInstance(      {}      )  =>  "Object"
    getInstance(      []      )  =>  "Array"
    getInstance(    Error     )  =>  "Function"
    getInstance( new Error()  )  =>  "Error"
    getInstance( new RegExp() )  =>  "RegExp"
*/
function getInstance (variable) {
  return Object.prototype.toString.call(variable).replace('[object ', '').replace(']', '')
}

export default getInstance
