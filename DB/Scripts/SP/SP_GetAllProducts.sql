DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_GetAllProducts`()
BEGIN
	select * from product;

END$$
DELIMITER ;
