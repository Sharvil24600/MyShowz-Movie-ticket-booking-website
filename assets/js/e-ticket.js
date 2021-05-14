var code =
	"11010010000100111011001011101111011010001110101110 011001101110010010111101110111001011001001000011011000111010110001001110111101101001011010111000101101";

var table = $(".barcode tr");
for (var i = 0; i < code.length; i++) {
	if (code[i] == 1) {
		table.append('<td bgcolor="black">');
	} else {
		table.append('<td bgcolor="white">');
	}
}