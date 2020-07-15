
'Getting Visible Text
vibletxt = WpfWindow("Micro Focus MyFlight Sample").GetVisibleText()
msgbox vibletxt

'Getting Visible Text
hWnd1 = WpfWindow("Micro Focus MyFlight Sample").GetROProperty("hWnd")
Searchtxt = TextUtil.GetText(hWnd1,20,20,0,0)
msgbox Searchtxt

'Checking the Text is in the location or not 
x = TextUtil.GetTextLocation("OK",hWnd1,-1,-1,-1,-1)
y= Dialog("text:=Micro Focus MyFlight Sample Application").GetTextLocation ("Password",hWnd,-1,-1,-1,-1)

If y OR x Then
	WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set "john"
	WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").SetSecure "5f0711345a26ac26eea1" @@ hightlight id_;_1987584744_;_script infofile_;_ZIP::ssf4.xml_;_
	WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Click
End If

'Checkpoint for name
WpfWindow("Micro Focus MyFlight Sample").WpfObject("John Smith").Check CheckPoint("John Smith") @@ hightlight id_;_1992274240_;_script infofile_;_ZIP::ssf5.xml_;_
WpfWindow("Micro Focus MyFlight Sample").Close

print "PDF file Read --------"
'Geeting Text From PDF File
hwnd2 = Window("Adobe Acrobat Reader DC").WinObject("AVPageView").GetROProperty("hWnd")
Searchtxt = TextUtil.GetText(hwnd2,-1,-1,-1,-1)
print Searchtxt


print "-----------------------------------------------------"

'Getting Text from Image 
txt = TextUtil.GetTextFromImage("C:\Users\iDeliver20\Downloads\tt3.jpeg",-1,-1,-1,-1)
msgbox txt

txt = TextUtil.GetTextFromImage("C:\Users\iDeliver20\Downloads\tt5.png",-1,-1,-1,-1) @@ hightlight id_;_1934755224_;_script infofile_;_ZIP::ssf6.xml_;_
print  txt

