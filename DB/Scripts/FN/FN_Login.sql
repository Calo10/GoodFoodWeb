DELIMITER $$
CREATE FUNCTION `FN_Login` (Email varchar(45), Password VARCHAR(45)) RETURNS INTEGER
BEGIN

	DECLARE ID int Default 0;

	SELECT u.id INTO ID
	FROM user u
	WHERE u.Email = Email && u.Password = Password;   
  
	RETURN ID;
END