DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_GetAllClients`()
BEGIN
	select * from user;

END$$
DELIMITER ;