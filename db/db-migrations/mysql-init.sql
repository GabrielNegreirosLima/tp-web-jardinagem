USE mysql;
UPDATE user SET Password=PASSWORD('d0ntpwnpl3ase') WHERE User='root';
FLUSH PRIVILEGES;

