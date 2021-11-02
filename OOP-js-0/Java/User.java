class User extends Account {
  public User(String name, String document, String email, String password) {
    super(name, document, email, password);
  }

  void getDataUser() {
    System.out.println("User Name: " + name);
    System.out.println("User ID: " + document);
    System.out.println("Email: " + email);
    System.out.println("Password: " + password);
  }
}
