// db.js
const faker = require("faker");

function generateBooks() {
  let books = [];

  for (let id = 1; id <= 100; id++) {
    let title = faker.random.words();
    let author = faker.name.findName();
    let thumbnail = faker.image.imageUrl();
    let description = faker.lorem.paragraphs();
    let publisher = faker.company.companyName();
    let isbn = faker.random.uuid();

    books.push({
      id: id,
      title: title,
      author: author,
      thumbnail: thumbnail,
      description: description,
      publisher: publisher,
      isbn: isbn,
    });
  }

  return { books: books };
}

module.exports = generateBooks;
