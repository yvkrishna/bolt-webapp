LXI H,5000H     
MVI C,10       
INX H        
MOV B,M      
DCR C        
LOOP: INX H        
MOV A,M 
CMP B
JC SKIP
MOV B,A      
SKIP: DCR C
JNZ LOOP
LXI H,9000H
MOV A,B
HLT