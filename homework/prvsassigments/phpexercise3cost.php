<!--  PHP code -->

<?php

	print "<br>";
	
	
	$ItemCost = 8.00;
	
	
		
	$A20Discount = 0.20;
	$A10Discount = 0.10;
	
	$FirstLevel = 10.00;
	
	$Discount = 0.00;
	
	
	$FinalPrice = 0.00;
	
	if  ( $ItemCost < $FirstLevel ) {  $Discount = $ItemCost * $A20Discount;  } 
	
	     else  {
	     	
	     	print "xxx: ";
	     	
	     	$Discount = $ItemCost * $A10Discount;
	     	
	     };
	

	
	print "Item Cost: ";
	print $ItemCost;
	print "<br>";
	
	
	print "Discount: ";
	print $Discount;
	print "<br>";
	
	
	
	
	print "Final Price: ";
	print $ItemCost - $Discount;
	
	print "<br>";
	
	
	
?>
	