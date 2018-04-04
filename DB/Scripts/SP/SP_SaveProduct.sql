DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_SaveProduct`(IN Name varchar(45), 
								IN Description varchar(45), 
                                IN UnitPrice double,  
                                IN Status tinyint,
                                IN idProductType int)
BEGIN
	insert into product (Name,Description,UnitPrice,Status,idProductType) 
    values (Name,Description,UnitPrice,Status,idProductType);
END$$
DELIMITER ;