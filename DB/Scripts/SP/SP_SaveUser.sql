DELIMITER $$;
CREATE PROCEDURE `SP_SaveUser` (IN Name varchar(45), 
								IN FirstLastName varchar(45), 
                                IN SecondLastName varchar(45),  
                                IN Email varchar(45),  
                                IN Password varchar(45))
BEGIN
	insert into User (Name,FirstLastName,SecondLastName,Email,Pass) 
    values (Name,FirstLastName,SecondLastName,Email,Password);
END
