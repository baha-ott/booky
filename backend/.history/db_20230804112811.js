// db.js
import { faker } from "@faker-js/faker";
import fs from "fs";

function generateBooks() {
  let books = [];
  const authors = {};
  for (let i = 1; i <= 1000; i++) {
    authors[i] = {
      id,
      name: faker.person.fullName(),
    };
  }
  for (let id = 1; id <= 1000; id++) {
    let title = faker?.word.noun(10);
    let thumbnail = faker.image.url();
    let description = faker.lorem.paragraphs();
    let publisher = faker.company.name();
    let isbn = faker.string.uuid();

    books.push({
      id: id,
      title: title,
      authorId: authors[id],
      thumbnail: thumbnail,
      description: description,
      publisher: publisher,
      isbn: isbn,
    });
  }

  return { books: books };
}

fs.writeFileSync("output.json", JSON.stringify(generateBooks()));
