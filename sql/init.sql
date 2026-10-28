CREATE DATABASE biblioteka;
USE biblioteka;

CREATE TABLE knjige (
    id INT AUTO_INCREMENT PRIMARY KEY,
    naslov NVARCHAR(50) NOT NULL,
    autor NVARCHAR(50) NOT NULL,
    opis NVARCHAR(500) NOT NULL
);

INSERT INTO knjige (naslov, autor, opis) VALUES
('The Great Gatsby', 'F. Scott Fitzgerald', 'A novel set in the Jazz Age that tells the story of Jay Gatsby and his unrequited love for Daisy Buchanan.'),
('To Kill a Mockingbird', 'Harper Lee', 'A novel about racial injustice in the Deep South, seen through the eyes of young Scout Finch.'),
('1984', 'George Orwell', 'A dystopian novel that explores themes of totalitarianism, surveillance, and individuality.'),
('Pride and Prejudice', 'Jane Austen', 'A classic romance novel that explores themes of love, social class, and family dynamics.'),
('The Catcher in the Rye', 'J.D. Salinger', 'A coming-of-age novel that follows the experiences of Holden Caulfield as he navigates adolescence and identity.');