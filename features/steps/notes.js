import { Given, When, Then, Before, After } from "@cucumber/cucumber";
import assert from "assert";

import initDriver from "../../configs/driver.js";
import HomePage from "../../pages/home.js";
import CreateNotePage from "../../pages/create.js";
import NoteDetailPage from "../../pages/detail.js";

let driver;
let homePage;
let createNotePage;
let noteDetailPage;

Before({ timeout: 6000 * 10000 }, async () => {
  try {
    driver = await initDriver();
    homePage = new HomePage(driver);
    createNotePage = new CreateNotePage(driver);
    noteDetailPage = new NoteDetailPage(driver);
  } catch (error) {
    console.error(error);
  }
});

Given("I am on the home page", async () => {
  const pageTitle = await homePage.getTitle();
  assert.equal(pageTitle, "Notes");
});

When("I see note data", async () => {
  const noteTitle = await homePage.getSampleNote();
  assert.notEqual(noteTitle, "");
});

Then("I can see all notes", async () => {
  const noteTitle = await homePage.getSampleNote();
  assert.notEqual(noteTitle, "");
});

When("I tap plus button", async () => {
  await homePage.tapPlusButton();
});

Then("I insert note title", async () => {
  const title = "my note title";
  await createNotePage.insertNoteTitle(title);
});

Then("I insert note content", async () => {
  const content = "this is note content";
  await createNotePage.insertNoteContent(content);
});

Then("I tap create button", async () => {
  await createNotePage.tapCreateButton();
});

Then("new note is created", async () => {
  const pageTitle = await createNotePage.getPageTitle();
  assert.equal(pageTitle, "Create a Note");
});

When("I tap certain note", async () => {
  await homePage.tapCertainNote();
});

Then("I can view note title and content", async () => {
  const pageTitle = await noteDetailPage.getPageTitle();
  assert.equal(pageTitle, "Note Details");

  const noteTitle = await noteDetailPage.getNoteTitle();
  assert.notEqual(noteTitle, "");

  const noteContent = await noteDetailPage.getNoteContent();
  assert.notEqual(noteContent, "");
});

After(async () => {
  await driver.deleteSession();
});
