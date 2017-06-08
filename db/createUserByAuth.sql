insert into users (username, authid, email, nickname, name, pic) values ($1, $2, $3, $4, $5, $6) returning id, username, authid, email, nickname, name, pic;
