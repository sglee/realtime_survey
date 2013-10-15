
# line 1 "ragel/i18n/it.rb.rl"
require 'gherkin/native'

module Gherkin
  module Lexer
    class It #:nodoc:
      native_impl('gherkin')

      
# line 125 "ragel/i18n/it.rb.rl"

 
      def initialize(listener)
        @listener = listener
        
# line 18 "lib/gherkin/lexer/it.rb"
class << self
	attr_accessor :_lexer_actions
	private :_lexer_actions, :_lexer_actions=
end
self._lexer_actions = [
	0, 1, 0, 1, 1, 1, 2, 1, 
	3, 1, 4, 1, 5, 1, 6, 1, 
	7, 1, 8, 1, 9, 1, 10, 1, 
	11, 1, 12, 1, 13, 1, 16, 1, 
	17, 1, 18, 1, 19, 1, 20, 1, 
	21, 1, 22, 1, 23, 2, 2, 18, 
	2, 3, 4, 2, 13, 0, 2, 14, 
	15, 2, 17, 0, 2, 17, 1, 2, 
	17, 16, 2, 17, 19, 2, 18, 6, 
	2, 18, 7, 2, 18, 8, 2, 18, 
	9, 2, 18, 10, 2, 18, 16, 2, 
	20, 21, 2, 22, 0, 2, 22, 1, 
	2, 22, 16, 2, 22, 19, 3, 4, 
	14, 15, 3, 5, 14, 15, 3, 11, 
	14, 15, 3, 12, 14, 15, 3, 13, 
	14, 15, 3, 14, 15, 18, 3, 17, 
	0, 11, 3, 17, 14, 15, 4, 2, 
	14, 15, 18, 4, 3, 4, 14, 15, 
	4, 17, 0, 14, 15, 5, 17, 0, 
	11, 14, 15
]

class << self
	attr_accessor :_lexer_key_offsets
	private :_lexer_key_offsets, :_lexer_key_offsets=
end
self._lexer_key_offsets = [
	0, 0, 19, 20, 21, 39, 40, 41, 
	43, 45, 50, 55, 60, 65, 69, 73, 
	75, 76, 77, 78, 79, 80, 81, 82, 
	83, 84, 85, 86, 87, 88, 89, 90, 
	91, 93, 95, 100, 107, 112, 113, 114, 
	115, 116, 117, 118, 119, 120, 121, 122, 
	123, 124, 125, 126, 127, 142, 144, 146, 
	148, 150, 152, 154, 156, 158, 160, 162, 
	164, 166, 168, 170, 172, 190, 191, 192, 
	196, 198, 199, 200, 201, 202, 203, 204, 
	205, 212, 214, 216, 218, 220, 222, 224, 
	226, 228, 230, 232, 234, 236, 238, 239, 
	240, 241, 242, 243, 244, 245, 246, 247, 
	248, 249, 250, 251, 252, 253, 264, 266, 
	268, 270, 272, 274, 276, 278, 280, 282, 
	284, 286, 288, 290, 292, 294, 296, 298, 
	300, 302, 304, 306, 308, 310, 312, 314, 
	316, 318, 320, 322, 324, 326, 328, 330, 
	332, 334, 336, 338, 340, 342, 344, 347, 
	349, 351, 353, 355, 357, 359, 361, 363, 
	365, 367, 369, 371, 373, 375, 377, 379, 
	381, 382, 383, 384, 385, 386, 387, 389, 
	390, 391, 392, 393, 394, 395, 396, 397, 
	413, 415, 417, 419, 421, 423, 425, 427, 
	429, 431, 433, 435, 437, 439, 441, 443, 
	445, 447, 449, 451, 453, 455, 457, 459, 
	461, 463, 465, 467, 469, 471, 473, 478, 
	480, 482, 484, 486, 488, 490, 492, 494, 
	496, 498, 500, 502, 504, 506, 508, 510, 
	512, 514, 517, 519, 521, 523, 525, 527, 
	529, 531, 533, 535, 537, 539, 541, 543, 
	545, 547, 549, 551, 552, 553, 554, 555, 
	556, 557, 558, 559, 560, 561, 562, 563, 
	564, 565, 566, 567, 568, 569, 570, 571, 
	572, 587, 589, 591, 593, 595, 597, 599, 
	601, 603, 605, 607, 609, 611, 613, 615, 
	617, 619, 621, 623, 625, 627, 629, 631, 
	636, 638, 640, 642, 644, 646, 648, 650, 
	652, 654, 656, 658, 660, 662, 664, 666, 
	668, 670, 672, 674, 676, 678, 680, 682, 
	684, 686, 690, 696, 699, 701, 707, 725, 
	727, 729, 731, 733, 735, 737, 739, 744, 
	746, 748, 750, 752, 754, 756, 758, 760, 
	762, 764, 766, 768, 770, 772, 774, 776, 
	778, 780, 782, 785, 787, 789, 791, 793, 
	795, 797, 799, 801, 803, 805, 807, 809, 
	811, 813, 815, 817, 819, 821
]

class << self
	attr_accessor :_lexer_trans_keys
	private :_lexer_trans_keys, :_lexer_trans_keys=
end
self._lexer_trans_keys = [
	-17, 10, 32, 34, 35, 37, 42, 64, 
	65, 67, 68, 69, 70, 77, 81, 83, 
	124, 9, 13, -69, -65, 10, 32, 34, 
	35, 37, 42, 64, 65, 67, 68, 69, 
	70, 77, 81, 83, 124, 9, 13, 34, 
	34, 10, 13, 10, 13, 10, 32, 34, 
	9, 13, 10, 32, 34, 9, 13, 10, 
	32, 34, 9, 13, 10, 32, 34, 9, 
	13, 10, 32, 9, 13, 10, 32, 9, 
	13, 10, 13, 10, 95, 70, 69, 65, 
	84, 85, 82, 69, 95, 69, 78, 68, 
	95, 37, 32, 10, 13, 10, 13, 13, 
	32, 64, 9, 10, 9, 10, 13, 32, 
	64, 11, 12, 10, 32, 64, 9, 13, 
	108, 108, 111, 114, 97, 111, 110, 116, 
	101, 115, 116, 111, 58, 10, 10, 10, 
	32, 35, 37, 42, 64, 65, 68, 69, 
	70, 77, 81, 83, 9, 13, 10, 95, 
	10, 70, 10, 69, 10, 65, 10, 84, 
	10, 85, 10, 82, 10, 69, 10, 95, 
	10, 69, 10, 78, 10, 68, 10, 95, 
	10, 37, 10, 32, 10, 32, 34, 35, 
	37, 42, 64, 65, 67, 68, 69, 70, 
	77, 81, 83, 124, 9, 13, 97, 116, 
	97, 101, 105, 111, 32, 115, 101, 109, 
	112, 105, 58, 10, 10, 10, 32, 35, 
	70, 124, 9, 13, 10, 117, 10, 110, 
	10, 122, 10, 105, 10, 111, 10, 110, 
	10, 97, 10, 108, 10, 105, 10, 116, 
	-61, 10, -96, 10, 10, 58, 117, 110, 
	122, 105, 111, 110, 97, 108, 105, 116, 
	-61, -96, 58, 10, 10, 10, 32, 35, 
	37, 64, 67, 69, 70, 83, 9, 13, 
	10, 95, 10, 70, 10, 69, 10, 65, 
	10, 84, 10, 85, 10, 82, 10, 69, 
	10, 95, 10, 69, 10, 78, 10, 68, 
	10, 95, 10, 37, 10, 111, 10, 110, 
	10, 116, 10, 101, 10, 115, 10, 116, 
	10, 111, 10, 58, 10, 115, 10, 101, 
	10, 109, 10, 112, 10, 105, 10, 117, 
	10, 110, 10, 122, 10, 105, 10, 111, 
	10, 110, 10, 97, 10, 108, 10, 105, 
	10, 116, -61, 10, -96, 10, 10, 99, 
	10, 101, 104, 10, 110, 10, 97, 10, 
	114, 10, 105, 10, 101, 10, 109, 10, 
	97, 10, 32, 10, 100, 10, 101, 10, 
	108, 10, 108, 10, 111, 10, 32, 10, 
	115, 10, 99, 10, 101, 117, 97, 110, 
	100, 111, 99, 101, 104, 110, 97, 114, 
	105, 111, 58, 10, 10, 10, 32, 35, 
	37, 42, 64, 65, 67, 68, 69, 70, 
	77, 81, 83, 9, 13, 10, 95, 10, 
	70, 10, 69, 10, 65, 10, 84, 10, 
	85, 10, 82, 10, 69, 10, 95, 10, 
	69, 10, 78, 10, 68, 10, 95, 10, 
	37, 10, 32, 10, 108, 10, 108, 10, 
	111, 10, 114, 10, 97, 10, 111, 10, 
	110, 10, 116, 10, 101, 10, 115, 10, 
	116, 10, 111, 10, 58, 10, 97, 10, 
	116, 10, 97, 101, 105, 111, 10, 117, 
	10, 110, 10, 122, 10, 105, 10, 111, 
	10, 110, 10, 97, 10, 108, 10, 105, 
	10, 116, -61, 10, -96, 10, 10, 117, 
	10, 97, 10, 110, 10, 100, 10, 111, 
	10, 99, 10, 101, 104, 10, 110, 10, 
	97, 10, 114, 10, 105, 10, 101, 10, 
	109, 10, 97, 10, 32, 10, 100, 10, 
	101, 10, 108, 10, 108, 10, 111, 10, 
	32, 10, 115, 10, 99, 10, 101, 101, 
	109, 97, 32, 100, 101, 108, 108, 111, 
	32, 115, 99, 101, 110, 97, 114, 105, 
	111, 58, 10, 10, 10, 32, 35, 37, 
	42, 64, 65, 68, 69, 70, 77, 81, 
	83, 9, 13, 10, 95, 10, 70, 10, 
	69, 10, 65, 10, 84, 10, 85, 10, 
	82, 10, 69, 10, 95, 10, 69, 10, 
	78, 10, 68, 10, 95, 10, 37, 10, 
	32, 10, 108, 10, 108, 10, 111, 10, 
	114, 10, 97, 10, 97, 10, 116, 10, 
	97, 101, 105, 111, 10, 117, 10, 110, 
	10, 122, 10, 105, 10, 111, 10, 110, 
	10, 97, 10, 108, 10, 105, 10, 116, 
	-61, 10, -96, 10, 10, 58, 10, 117, 
	10, 97, 10, 110, 10, 100, 10, 111, 
	10, 99, 10, 101, 10, 110, 10, 97, 
	10, 114, 10, 105, 10, 111, 32, 124, 
	9, 13, 10, 32, 92, 124, 9, 13, 
	10, 92, 124, 10, 92, 10, 32, 92, 
	124, 9, 13, 10, 32, 34, 35, 37, 
	42, 64, 65, 67, 68, 69, 70, 77, 
	81, 83, 124, 9, 13, 10, 108, 10, 
	108, 10, 111, 10, 114, 10, 97, 10, 
	97, 10, 116, 10, 97, 101, 105, 111, 
	10, 117, 10, 110, 10, 122, 10, 105, 
	10, 111, 10, 110, 10, 97, 10, 108, 
	10, 105, 10, 116, -61, 10, -96, 10, 
	10, 58, 10, 117, 10, 97, 10, 110, 
	10, 100, 10, 111, 10, 99, 10, 101, 
	104, 10, 110, 10, 97, 10, 114, 10, 
	105, 10, 111, 10, 101, 10, 109, 10, 
	97, 10, 32, 10, 100, 10, 101, 10, 
	108, 10, 108, 10, 111, 10, 32, 10, 
	115, 10, 99, 10, 101, 0
]

class << self
	attr_accessor :_lexer_single_lengths
	private :_lexer_single_lengths, :_lexer_single_lengths=
end
self._lexer_single_lengths = [
	0, 17, 1, 1, 16, 1, 1, 2, 
	2, 3, 3, 3, 3, 2, 2, 2, 
	1, 1, 1, 1, 1, 1, 1, 1, 
	1, 1, 1, 1, 1, 1, 1, 1, 
	2, 2, 3, 5, 3, 1, 1, 1, 
	1, 1, 1, 1, 1, 1, 1, 1, 
	1, 1, 1, 1, 13, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 16, 1, 1, 4, 
	2, 1, 1, 1, 1, 1, 1, 1, 
	5, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 1, 1, 
	1, 1, 1, 1, 1, 1, 1, 1, 
	1, 1, 1, 1, 1, 9, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 3, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	1, 1, 1, 1, 1, 1, 2, 1, 
	1, 1, 1, 1, 1, 1, 1, 14, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 5, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 3, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 1, 1, 1, 1, 1, 
	1, 1, 1, 1, 1, 1, 1, 1, 
	1, 1, 1, 1, 1, 1, 1, 1, 
	13, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 5, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 4, 3, 2, 4, 16, 2, 
	2, 2, 2, 2, 2, 2, 5, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 3, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 0
]

class << self
	attr_accessor :_lexer_range_lengths
	private :_lexer_range_lengths, :_lexer_range_lengths=
end
self._lexer_range_lengths = [
	0, 1, 0, 0, 1, 0, 0, 0, 
	0, 1, 1, 1, 1, 1, 1, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 1, 1, 1, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 1, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 1, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	1, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 1, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 1, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	1, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 1, 1, 0, 0, 1, 1, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0
]

class << self
	attr_accessor :_lexer_index_offsets
	private :_lexer_index_offsets, :_lexer_index_offsets=
end
self._lexer_index_offsets = [
	0, 0, 19, 21, 23, 41, 43, 45, 
	48, 51, 56, 61, 66, 71, 75, 79, 
	82, 84, 86, 88, 90, 92, 94, 96, 
	98, 100, 102, 104, 106, 108, 110, 112, 
	114, 117, 120, 125, 132, 137, 139, 141, 
	143, 145, 147, 149, 151, 153, 155, 157, 
	159, 161, 163, 165, 167, 182, 185, 188, 
	191, 194, 197, 200, 203, 206, 209, 212, 
	215, 218, 221, 224, 227, 245, 247, 249, 
	254, 257, 259, 261, 263, 265, 267, 269, 
	271, 278, 281, 284, 287, 290, 293, 296, 
	299, 302, 305, 308, 311, 314, 317, 319, 
	321, 323, 325, 327, 329, 331, 333, 335, 
	337, 339, 341, 343, 345, 347, 358, 361, 
	364, 367, 370, 373, 376, 379, 382, 385, 
	388, 391, 394, 397, 400, 403, 406, 409, 
	412, 415, 418, 421, 424, 427, 430, 433, 
	436, 439, 442, 445, 448, 451, 454, 457, 
	460, 463, 466, 469, 472, 475, 478, 482, 
	485, 488, 491, 494, 497, 500, 503, 506, 
	509, 512, 515, 518, 521, 524, 527, 530, 
	533, 535, 537, 539, 541, 543, 545, 548, 
	550, 552, 554, 556, 558, 560, 562, 564, 
	580, 583, 586, 589, 592, 595, 598, 601, 
	604, 607, 610, 613, 616, 619, 622, 625, 
	628, 631, 634, 637, 640, 643, 646, 649, 
	652, 655, 658, 661, 664, 667, 670, 676, 
	679, 682, 685, 688, 691, 694, 697, 700, 
	703, 706, 709, 712, 715, 718, 721, 724, 
	727, 730, 734, 737, 740, 743, 746, 749, 
	752, 755, 758, 761, 764, 767, 770, 773, 
	776, 779, 782, 785, 787, 789, 791, 793, 
	795, 797, 799, 801, 803, 805, 807, 809, 
	811, 813, 815, 817, 819, 821, 823, 825, 
	827, 842, 845, 848, 851, 854, 857, 860, 
	863, 866, 869, 872, 875, 878, 881, 884, 
	887, 890, 893, 896, 899, 902, 905, 908, 
	914, 917, 920, 923, 926, 929, 932, 935, 
	938, 941, 944, 947, 950, 953, 956, 959, 
	962, 965, 968, 971, 974, 977, 980, 983, 
	986, 989, 993, 999, 1003, 1006, 1012, 1030, 
	1033, 1036, 1039, 1042, 1045, 1048, 1051, 1057, 
	1060, 1063, 1066, 1069, 1072, 1075, 1078, 1081, 
	1084, 1087, 1090, 1093, 1096, 1099, 1102, 1105, 
	1108, 1111, 1114, 1118, 1121, 1124, 1127, 1130, 
	1133, 1136, 1139, 1142, 1145, 1148, 1151, 1154, 
	1157, 1160, 1163, 1166, 1169, 1172
]

class << self
	attr_accessor :_lexer_indicies
	private :_lexer_indicies, :_lexer_indicies=
end
self._lexer_indicies = [
	1, 3, 2, 4, 5, 6, 7, 8, 
	9, 10, 11, 12, 13, 14, 15, 16, 
	17, 2, 0, 18, 0, 2, 0, 3, 
	2, 4, 5, 6, 7, 8, 9, 10, 
	11, 12, 13, 14, 15, 16, 17, 2, 
	0, 19, 0, 20, 0, 22, 23, 21, 
	25, 26, 24, 29, 28, 30, 28, 27, 
	33, 32, 34, 32, 31, 33, 32, 35, 
	32, 31, 33, 32, 36, 32, 31, 38, 
	37, 37, 0, 3, 39, 39, 0, 41, 
	42, 40, 3, 0, 43, 0, 44, 0, 
	45, 0, 46, 0, 47, 0, 48, 0, 
	49, 0, 50, 0, 51, 0, 52, 0, 
	53, 0, 54, 0, 55, 0, 56, 0, 
	57, 0, 59, 60, 58, 62, 63, 61, 
	0, 0, 0, 0, 64, 65, 66, 65, 
	65, 68, 67, 64, 3, 69, 8, 69, 
	0, 70, 0, 71, 0, 72, 0, 73, 
	0, 74, 0, 75, 0, 76, 0, 77, 
	0, 78, 0, 79, 0, 80, 0, 81, 
	0, 82, 0, 84, 83, 86, 85, 86, 
	87, 88, 89, 90, 88, 91, 92, 90, 
	93, 94, 95, 96, 87, 85, 86, 97, 
	85, 86, 98, 85, 86, 99, 85, 86, 
	100, 85, 86, 101, 85, 86, 102, 85, 
	86, 103, 85, 86, 104, 85, 86, 105, 
	85, 86, 106, 85, 86, 107, 85, 86, 
	108, 85, 86, 109, 85, 86, 110, 85, 
	86, 111, 85, 113, 112, 114, 115, 116, 
	117, 118, 119, 120, 121, 122, 123, 124, 
	125, 126, 127, 112, 0, 128, 0, 129, 
	0, 74, 74, 74, 74, 0, 57, 130, 
	0, 131, 0, 132, 0, 133, 0, 134, 
	0, 135, 0, 137, 136, 139, 138, 139, 
	140, 141, 142, 141, 140, 138, 139, 143, 
	138, 139, 144, 138, 139, 145, 138, 139, 
	146, 138, 139, 147, 138, 139, 148, 138, 
	139, 149, 138, 139, 150, 138, 139, 151, 
	138, 139, 152, 138, 153, 139, 138, 154, 
	139, 138, 139, 155, 138, 156, 0, 157, 
	0, 158, 0, 159, 0, 160, 0, 161, 
	0, 162, 0, 163, 0, 164, 0, 165, 
	0, 166, 0, 167, 0, 168, 0, 170, 
	169, 172, 171, 172, 173, 174, 175, 174, 
	176, 177, 178, 179, 173, 171, 172, 180, 
	171, 172, 181, 171, 172, 182, 171, 172, 
	183, 171, 172, 184, 171, 172, 185, 171, 
	172, 186, 171, 172, 187, 171, 172, 188, 
	171, 172, 189, 171, 172, 190, 171, 172, 
	191, 171, 172, 192, 171, 172, 193, 171, 
	172, 194, 171, 172, 195, 171, 172, 196, 
	171, 172, 197, 171, 172, 198, 171, 172, 
	199, 171, 172, 200, 171, 172, 201, 171, 
	172, 202, 171, 172, 203, 171, 172, 204, 
	171, 172, 205, 171, 172, 200, 171, 172, 
	206, 171, 172, 207, 171, 172, 208, 171, 
	172, 209, 171, 172, 210, 171, 172, 211, 
	171, 172, 212, 171, 172, 213, 171, 172, 
	214, 171, 172, 215, 171, 216, 172, 171, 
	200, 172, 171, 172, 217, 171, 172, 218, 
	219, 171, 172, 220, 171, 172, 221, 171, 
	172, 222, 171, 172, 199, 171, 172, 223, 
	171, 172, 224, 171, 172, 225, 171, 172, 
	226, 171, 172, 227, 171, 172, 228, 171, 
	172, 229, 171, 172, 230, 171, 172, 231, 
	171, 172, 232, 171, 172, 233, 171, 172, 
	234, 171, 172, 218, 171, 235, 0, 236, 
	0, 237, 0, 238, 0, 74, 0, 239, 
	0, 240, 241, 0, 242, 0, 243, 0, 
	244, 0, 245, 0, 246, 0, 247, 0, 
	249, 248, 251, 250, 251, 252, 253, 254, 
	255, 253, 256, 257, 258, 255, 259, 260, 
	261, 262, 252, 250, 251, 263, 250, 251, 
	264, 250, 251, 265, 250, 251, 266, 250, 
	251, 267, 250, 251, 268, 250, 251, 269, 
	250, 251, 270, 250, 251, 271, 250, 251, 
	272, 250, 251, 273, 250, 251, 274, 250, 
	251, 275, 250, 251, 276, 250, 251, 277, 
	250, 251, 278, 250, 251, 279, 250, 251, 
	280, 250, 251, 281, 250, 251, 282, 250, 
	251, 283, 250, 251, 284, 250, 251, 285, 
	250, 251, 286, 250, 251, 287, 250, 251, 
	288, 250, 251, 289, 250, 251, 277, 250, 
	251, 290, 250, 251, 291, 250, 251, 282, 
	282, 282, 282, 250, 251, 292, 250, 251, 
	293, 250, 251, 294, 250, 251, 295, 250, 
	251, 296, 250, 251, 297, 250, 251, 298, 
	250, 251, 299, 250, 251, 300, 250, 251, 
	301, 250, 302, 251, 250, 289, 251, 250, 
	251, 303, 250, 251, 304, 250, 251, 305, 
	250, 251, 306, 250, 251, 282, 250, 251, 
	307, 250, 251, 308, 309, 250, 251, 310, 
	250, 251, 311, 250, 251, 312, 250, 251, 
	288, 250, 251, 313, 250, 251, 314, 250, 
	251, 315, 250, 251, 316, 250, 251, 317, 
	250, 251, 318, 250, 251, 319, 250, 251, 
	320, 250, 251, 321, 250, 251, 322, 250, 
	251, 323, 250, 251, 324, 250, 251, 308, 
	250, 325, 0, 326, 0, 327, 0, 328, 
	0, 329, 0, 330, 0, 331, 0, 332, 
	0, 333, 0, 334, 0, 335, 0, 336, 
	0, 337, 0, 338, 0, 339, 0, 340, 
	0, 341, 0, 342, 0, 343, 0, 345, 
	344, 347, 346, 347, 348, 349, 350, 351, 
	349, 352, 353, 351, 354, 355, 356, 357, 
	348, 346, 347, 358, 346, 347, 359, 346, 
	347, 360, 346, 347, 361, 346, 347, 362, 
	346, 347, 363, 346, 347, 364, 346, 347, 
	365, 346, 347, 366, 346, 347, 367, 346, 
	347, 368, 346, 347, 369, 346, 347, 370, 
	346, 347, 371, 346, 347, 372, 346, 347, 
	373, 346, 347, 374, 346, 347, 375, 346, 
	347, 376, 346, 347, 377, 346, 347, 378, 
	346, 347, 379, 346, 347, 377, 377, 377, 
	377, 346, 347, 380, 346, 347, 381, 346, 
	347, 382, 346, 347, 383, 346, 347, 384, 
	346, 347, 385, 346, 347, 386, 346, 347, 
	387, 346, 347, 388, 346, 347, 389, 346, 
	390, 347, 346, 391, 347, 346, 347, 372, 
	346, 347, 392, 346, 347, 393, 346, 347, 
	394, 346, 347, 395, 346, 347, 377, 346, 
	347, 396, 346, 347, 397, 346, 347, 398, 
	346, 347, 399, 346, 347, 400, 346, 347, 
	401, 346, 347, 391, 346, 402, 403, 402, 
	0, 406, 405, 407, 408, 405, 404, 0, 
	410, 411, 409, 0, 410, 409, 406, 412, 
	410, 411, 412, 409, 406, 413, 414, 415, 
	416, 417, 418, 419, 420, 421, 422, 423, 
	424, 425, 426, 427, 413, 0, 86, 428, 
	85, 86, 429, 85, 86, 430, 85, 86, 
	431, 85, 86, 432, 85, 86, 433, 85, 
	86, 434, 85, 86, 432, 432, 432, 432, 
	85, 86, 435, 85, 86, 436, 85, 86, 
	437, 85, 86, 438, 85, 86, 439, 85, 
	86, 440, 85, 86, 441, 85, 86, 442, 
	85, 86, 443, 85, 86, 444, 85, 445, 
	86, 85, 446, 86, 85, 86, 111, 85, 
	86, 447, 85, 86, 448, 85, 86, 449, 
	85, 86, 450, 85, 86, 432, 85, 86, 
	451, 85, 86, 452, 453, 85, 86, 454, 
	85, 86, 455, 85, 86, 456, 85, 86, 
	457, 85, 86, 446, 85, 86, 458, 85, 
	86, 459, 85, 86, 460, 85, 86, 461, 
	85, 86, 462, 85, 86, 463, 85, 86, 
	464, 85, 86, 465, 85, 86, 466, 85, 
	86, 467, 85, 86, 468, 85, 86, 469, 
	85, 86, 452, 85, 470, 0
]

class << self
	attr_accessor :_lexer_trans_targs
	private :_lexer_trans_targs, :_lexer_trans_targs=
end
self._lexer_trans_targs = [
	0, 2, 4, 4, 5, 15, 17, 31, 
	34, 37, 42, 69, 72, 94, 41, 168, 
	173, 321, 3, 6, 7, 8, 9, 8, 
	8, 9, 8, 10, 10, 10, 11, 10, 
	10, 10, 11, 12, 13, 14, 4, 14, 
	15, 4, 16, 18, 19, 20, 21, 22, 
	23, 24, 25, 26, 27, 28, 29, 30, 
	373, 32, 33, 4, 16, 33, 4, 16, 
	35, 36, 4, 35, 34, 36, 38, 39, 
	40, 41, 31, 43, 44, 45, 46, 47, 
	48, 49, 50, 51, 52, 51, 52, 52, 
	4, 53, 67, 327, 332, 335, 331, 348, 
	353, 54, 55, 56, 57, 58, 59, 60, 
	61, 62, 63, 64, 65, 66, 4, 68, 
	4, 4, 5, 15, 17, 31, 34, 37, 
	42, 69, 72, 94, 41, 168, 173, 321, 
	70, 71, 73, 74, 75, 76, 77, 78, 
	79, 80, 79, 80, 80, 4, 81, 82, 
	83, 84, 85, 86, 87, 88, 89, 90, 
	91, 92, 93, 68, 95, 96, 97, 98, 
	99, 100, 101, 102, 103, 104, 105, 106, 
	107, 108, 109, 108, 109, 109, 4, 110, 
	124, 132, 137, 149, 111, 112, 113, 114, 
	115, 116, 117, 118, 119, 120, 121, 122, 
	123, 4, 125, 126, 127, 128, 129, 130, 
	131, 68, 133, 134, 135, 136, 138, 139, 
	140, 141, 142, 143, 144, 145, 146, 147, 
	148, 150, 151, 155, 152, 153, 154, 156, 
	157, 158, 159, 160, 161, 162, 163, 164, 
	165, 166, 167, 169, 170, 171, 172, 174, 
	175, 251, 176, 177, 178, 179, 180, 181, 
	182, 183, 182, 183, 183, 4, 184, 198, 
	199, 204, 212, 215, 203, 227, 232, 185, 
	186, 187, 188, 189, 190, 191, 192, 193, 
	194, 195, 196, 197, 4, 68, 200, 201, 
	202, 203, 198, 205, 206, 207, 208, 209, 
	210, 211, 213, 214, 216, 217, 218, 219, 
	220, 221, 222, 223, 224, 225, 226, 228, 
	229, 230, 231, 233, 234, 238, 235, 236, 
	237, 239, 240, 241, 242, 243, 244, 245, 
	246, 247, 248, 249, 250, 252, 253, 254, 
	255, 256, 257, 258, 259, 260, 261, 262, 
	263, 264, 265, 266, 267, 268, 269, 270, 
	271, 272, 271, 272, 272, 4, 273, 287, 
	288, 293, 296, 292, 309, 314, 274, 275, 
	276, 277, 278, 279, 280, 281, 282, 283, 
	284, 285, 286, 4, 68, 289, 290, 291, 
	292, 287, 294, 295, 297, 298, 299, 300, 
	301, 302, 303, 304, 305, 306, 307, 308, 
	310, 311, 312, 313, 315, 316, 317, 318, 
	319, 320, 321, 322, 323, 325, 326, 324, 
	322, 323, 324, 322, 325, 326, 5, 15, 
	17, 31, 34, 37, 42, 69, 72, 94, 
	41, 168, 173, 321, 328, 329, 330, 331, 
	67, 333, 334, 336, 337, 338, 339, 340, 
	341, 342, 343, 344, 345, 346, 347, 349, 
	350, 351, 352, 354, 355, 360, 356, 357, 
	358, 359, 361, 362, 363, 364, 365, 366, 
	367, 368, 369, 370, 371, 372, 0
]

class << self
	attr_accessor :_lexer_trans_actions
	private :_lexer_trans_actions, :_lexer_trans_actions=
end
self._lexer_trans_actions = [
	43, 0, 0, 54, 3, 1, 0, 29, 
	1, 29, 29, 29, 29, 29, 29, 29, 
	29, 35, 0, 0, 0, 7, 139, 48, 
	0, 102, 9, 5, 45, 134, 45, 0, 
	33, 122, 33, 33, 0, 11, 106, 0, 
	0, 114, 25, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 57, 149, 126, 0, 110, 23, 
	0, 27, 118, 27, 51, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 57, 144, 0, 54, 0, 
	72, 33, 84, 84, 84, 84, 84, 84, 
	84, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 15, 15, 
	31, 130, 60, 57, 31, 63, 57, 63, 
	63, 63, 63, 63, 63, 63, 63, 66, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	57, 144, 0, 54, 0, 81, 84, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 21, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 57, 144, 0, 54, 0, 69, 33, 
	84, 84, 84, 84, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 13, 0, 0, 0, 0, 0, 0, 
	0, 13, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	57, 144, 0, 54, 0, 75, 33, 84, 
	84, 84, 84, 84, 84, 84, 84, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 17, 17, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	57, 144, 0, 54, 0, 78, 33, 84, 
	84, 84, 84, 84, 84, 84, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 19, 19, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 37, 37, 54, 37, 
	87, 0, 0, 39, 0, 0, 93, 90, 
	41, 96, 90, 96, 96, 96, 96, 96, 
	96, 96, 96, 99, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0
]

class << self
	attr_accessor :_lexer_eof_actions
	private :_lexer_eof_actions, :_lexer_eof_actions=
end
self._lexer_eof_actions = [
	0, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43
]

class << self
	attr_accessor :lexer_start
end
self.lexer_start = 1;
class << self
	attr_accessor :lexer_first_final
end
self.lexer_first_final = 373;
class << self
	attr_accessor :lexer_error
end
self.lexer_error = 0;

class << self
	attr_accessor :lexer_en_main
end
self.lexer_en_main = 1;


# line 130 "ragel/i18n/it.rb.rl"
      end
 
      def scan(data)
        data = (data + "\n%_FEATURE_END_%").unpack("c*") # Explicit EOF simplifies things considerably
        eof = pe = data.length
 
        @line_number = 1
        @last_newline = 0
 
        
# line 742 "lib/gherkin/lexer/it.rb"
begin
	p ||= 0
	pe ||= data.length
	cs = lexer_start
end

# line 140 "ragel/i18n/it.rb.rl"
        
# line 751 "lib/gherkin/lexer/it.rb"
begin
	_klen, _trans, _keys, _acts, _nacts = nil
	_goto_level = 0
	_resume = 10
	_eof_trans = 15
	_again = 20
	_test_eof = 30
	_out = 40
	while true
	_trigger_goto = false
	if _goto_level <= 0
	if p == pe
		_goto_level = _test_eof
		next
	end
	if cs == 0
		_goto_level = _out
		next
	end
	end
	if _goto_level <= _resume
	_keys = _lexer_key_offsets[cs]
	_trans = _lexer_index_offsets[cs]
	_klen = _lexer_single_lengths[cs]
	_break_match = false
	
	begin
	  if _klen > 0
	     _lower = _keys
	     _upper = _keys + _klen - 1

	     loop do
	        break if _upper < _lower
	        _mid = _lower + ( (_upper - _lower) >> 1 )

	        if data[p].ord < _lexer_trans_keys[_mid]
	           _upper = _mid - 1
	        elsif data[p].ord > _lexer_trans_keys[_mid]
	           _lower = _mid + 1
	        else
	           _trans += (_mid - _keys)
	           _break_match = true
	           break
	        end
	     end # loop
	     break if _break_match
	     _keys += _klen
	     _trans += _klen
	  end
	  _klen = _lexer_range_lengths[cs]
	  if _klen > 0
	     _lower = _keys
	     _upper = _keys + (_klen << 1) - 2
	     loop do
	        break if _upper < _lower
	        _mid = _lower + (((_upper-_lower) >> 1) & ~1)
	        if data[p].ord < _lexer_trans_keys[_mid]
	          _upper = _mid - 2
	        elsif data[p].ord > _lexer_trans_keys[_mid+1]
	          _lower = _mid + 2
	        else
	          _trans += ((_mid - _keys) >> 1)
	          _break_match = true
	          break
	        end
	     end # loop
	     break if _break_match
	     _trans += _klen
	  end
	end while false
	_trans = _lexer_indicies[_trans]
	cs = _lexer_trans_targs[_trans]
	if _lexer_trans_actions[_trans] != 0
		_acts = _lexer_trans_actions[_trans]
		_nacts = _lexer_actions[_acts]
		_acts += 1
		while _nacts > 0
			_nacts -= 1
			_acts += 1
			case _lexer_actions[_acts - 1]
when 0 then
# line 11 "ragel/i18n/it.rb.rl"
		begin

          @content_start = p
          @current_line = @line_number
          @start_col = p - @last_newline - "#{@keyword}:".length
        		end
when 1 then
# line 17 "ragel/i18n/it.rb.rl"
		begin

          @current_line = @line_number
          @start_col = p - @last_newline
        		end
when 2 then
# line 22 "ragel/i18n/it.rb.rl"
		begin

          @content_start = p
        		end
when 3 then
# line 26 "ragel/i18n/it.rb.rl"
		begin

          @docstring_content_type_start = p
        		end
when 4 then
# line 29 "ragel/i18n/it.rb.rl"
		begin

          @docstring_content_type_end = p
        		end
when 5 then
# line 33 "ragel/i18n/it.rb.rl"
		begin

          con = unindent(@start_col, utf8_pack(data[@content_start...@next_keyword_start-1]).sub(/(\r?\n)?([\t ])*\Z/, '').gsub(/\\"\\"\\"/, '"""'))
          con_type = utf8_pack(data[@docstring_content_type_start...@docstring_content_type_end]).strip
          @listener.doc_string(con_type, con, @current_line) 
        		end
when 6 then
# line 38 "ragel/i18n/it.rb.rl"
		begin

          p = store_keyword_content(:feature, data, p, eof)
        		end
when 7 then
# line 42 "ragel/i18n/it.rb.rl"
		begin

          p = store_keyword_content(:background, data, p, eof)
        		end
when 8 then
# line 46 "ragel/i18n/it.rb.rl"
		begin

          p = store_keyword_content(:scenario, data, p, eof)
        		end
when 9 then
# line 50 "ragel/i18n/it.rb.rl"
		begin

          p = store_keyword_content(:scenario_outline, data, p, eof)
        		end
when 10 then
# line 54 "ragel/i18n/it.rb.rl"
		begin

          p = store_keyword_content(:examples, data, p, eof)
        		end
when 11 then
# line 58 "ragel/i18n/it.rb.rl"
		begin

          con = utf8_pack(data[@content_start...p]).strip
          @listener.step(@keyword, con, @current_line)
        		end
when 12 then
# line 63 "ragel/i18n/it.rb.rl"
		begin

          con = utf8_pack(data[@content_start...p]).strip
          @listener.comment(con, @line_number)
          @keyword_start = nil
        		end
when 13 then
# line 69 "ragel/i18n/it.rb.rl"
		begin

          con = utf8_pack(data[@content_start...p]).strip
          @listener.tag(con, @current_line)
          @keyword_start = nil
        		end
when 14 then
# line 75 "ragel/i18n/it.rb.rl"
		begin

          @line_number += 1
        		end
when 15 then
# line 79 "ragel/i18n/it.rb.rl"
		begin

          @last_newline = p + 1
        		end
when 16 then
# line 83 "ragel/i18n/it.rb.rl"
		begin

          @keyword_start ||= p
        		end
when 17 then
# line 87 "ragel/i18n/it.rb.rl"
		begin

          @keyword = utf8_pack(data[@keyword_start...p]).sub(/:$/,'')
          @keyword_start = nil
        		end
when 18 then
# line 92 "ragel/i18n/it.rb.rl"
		begin

          @next_keyword_start = p
        		end
when 19 then
# line 96 "ragel/i18n/it.rb.rl"
		begin

          p = p - 1
          current_row = []
          @current_line = @line_number
        		end
when 20 then
# line 102 "ragel/i18n/it.rb.rl"
		begin

          @content_start = p
        		end
when 21 then
# line 106 "ragel/i18n/it.rb.rl"
		begin

          con = utf8_pack(data[@content_start...p]).strip
          current_row << con.gsub(/\\\|/, "|").gsub(/\\n/, "\n").gsub(/\\\\/, "\\")
        		end
when 22 then
# line 111 "ragel/i18n/it.rb.rl"
		begin

          @listener.row(current_row, @current_line)
        		end
when 23 then
# line 115 "ragel/i18n/it.rb.rl"
		begin

          if cs < lexer_first_final
            content = current_line_content(data, p)
            raise Gherkin::Lexer::LexingError.new("Lexing error on line %d: '%s'. See http://wiki.github.com/cucumber/gherkin/lexingerror for more information." % [@line_number, content])
          else
            @listener.eof
          end
        		end
# line 995 "lib/gherkin/lexer/it.rb"
			end # action switch
		end
	end
	if _trigger_goto
		next
	end
	end
	if _goto_level <= _again
	if cs == 0
		_goto_level = _out
		next
	end
	p += 1
	if p != pe
		_goto_level = _resume
		next
	end
	end
	if _goto_level <= _test_eof
	if p == eof
	__acts = _lexer_eof_actions[cs]
	__nacts =  _lexer_actions[__acts]
	__acts += 1
	while __nacts > 0
		__nacts -= 1
		__acts += 1
		case _lexer_actions[__acts - 1]
when 23 then
# line 115 "ragel/i18n/it.rb.rl"
		begin

          if cs < lexer_first_final
            content = current_line_content(data, p)
            raise Gherkin::Lexer::LexingError.new("Lexing error on line %d: '%s'. See http://wiki.github.com/cucumber/gherkin/lexingerror for more information." % [@line_number, content])
          else
            @listener.eof
          end
        		end
# line 1034 "lib/gherkin/lexer/it.rb"
		end # eof action switch
	end
	if _trigger_goto
		next
	end
end
	end
	if _goto_level <= _out
		break
	end
	end
	end

# line 141 "ragel/i18n/it.rb.rl"
      end

      def unindent(startcol, text)
        text.gsub(/^[\t ]{0,#{startcol}}/, "")
      end

      def store_keyword_content(event, data, p, eof)
        end_point = (!@next_keyword_start or (p == eof)) ? p : @next_keyword_start
        content = unindent(@start_col + 2, utf8_pack(data[@content_start...end_point])).rstrip
        content_lines = content.split("\n")
        name = content_lines.shift || ""
        name.strip!
        description = content_lines.join("\n")
        @listener.__send__(event, @keyword, name, description, @current_line)
        @next_keyword_start ? @next_keyword_start - 1 : p
      ensure
        @next_keyword_start = nil
      end
      
      def current_line_content(data, p)
        rest = data[@last_newline..-1]
        utf8_pack(rest[0..rest.index(10)||-1]).strip # 10 is \n
      end

      if (RUBY_VERSION =~ /^1\.9|2\.0/)
        def utf8_pack(array)
          array.pack("c*").force_encoding("UTF-8")
        end
      else
        def utf8_pack(array)
          array.pack("c*")
        end
      end
    end
  end
end
