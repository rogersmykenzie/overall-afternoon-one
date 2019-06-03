INSERT INTO song (title, artist, album)
VALUES ($1, $2, $3); --1st, 2nd, and 3rd parameter

SELECT * FROM song; --After we do that, we select * from song. This is what
                    --the response is in the .then()