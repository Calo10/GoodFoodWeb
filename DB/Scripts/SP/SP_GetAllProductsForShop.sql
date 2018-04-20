DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_GetAllProductsForShop`()
BEGIN
	select * from product where Status = 1;

END$$
DELIMITER ;
