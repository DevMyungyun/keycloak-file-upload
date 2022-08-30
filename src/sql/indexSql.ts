class query {

  test(): string {
    let stringQuery = "";
    stringQuery += " SELECT 'this is test...' ";
    stringQuery += " AS TEST ";
    return stringQuery
  };

}

let indexQuery = new query();

export default indexQuery;