import { BookTicketsModule } from './book-tickets.module';

describe('BookTicketsModule', () => {
  let bookTicketsModule: BookTicketsModule;

  beforeEach(() => {
    bookTicketsModule = new BookTicketsModule();
  });

  it('should create an instance', () => {
    expect(bookTicketsModule).toBeTruthy();
  });
});
