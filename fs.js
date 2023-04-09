import { writeFile, readFile, unlink } from "fs";

let exampleData = {
  name: "Employee 1 Name",
  id: 1,
  email: "lyhxr@example.com",
  salary: "1000",
};

writeFile("./employees.json", JSON.stringify(exampleData), () => {
  readFile("./employees.json", "utf-8", (err, data) =>
    err ? console.error(err) : fileCallback(data)
  );
});

function fileCallback(data) {
  console.log(data);
  let employee = JSON.parse(data);
  employee.name = "George";
  employee.id = 1;
  employee.email = "george@gmail.com";
  employee.salary = "35.200";

  writeFile("./employees.json", JSON.stringify(employee), "utf-8", () => {
    console.log("Employee changed. deleting.");
    unlink("./employees.json", () => {
      console.log("File deleted");
    });
  });
}
