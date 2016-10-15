var regsistryPathx64 = "HKEY_LOCAL_MACHINE\SOFTWARE\\Wow6432Node\\Microsoft\\Windows\\CurrentVersion\\";
var registryPathx86 = "HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\";
var checkObj;
var n;
var registryPath;
var regValue="";
var partnerID;
var v5toolbarOffered = false;
var v6SaturationToolbarOfferFlag = false;
var overinstallFlag=false;
var v5Offerpresented="7:Saturation offer was not made because primary offer was made";
var unsupportedBrowser="2:Unsupported default browser";
var blocklistedPartner="5:Block V6 ? New toolbar listed in the block list";
var v6SatInstalled="4:Prior toolbar typet (Shopping)";
var v5ToolbarInstalled ="1:Offer cannot be installed as offer already exists";
var reasonString="";

var jsonString={
  "blocklistedPartners": [],
  "makeofferdisabled": [
"WCL2","ACDS","ADS","AF3-SRS","AGH","ALSV5-DL","AM2","AM3","AMG","APLV5","APL1V5","APL2V5","ASDGS","ATR","ATU","ATU-DL","ATU-ASK","ATU-QBD","ATU-SRS","AXBX","BBY","BBY-SRS","BBY2","BBY2-SRS","BCC","BCPAP","BUD","BLP-DL","BGM","BOO","BOO2","BS","BT-SRS-T3","BT-T1","BT-T2","BT-T3","BT-ASK-T4","BUD","BW","C2P","CCS","CDS","CDS2","CDS3","CDS4","CEBV5","CFTPV5","CFTP2V5","CIE","CLA","CLM-DL","CNB","CNET","CNET2","CNET3","CPUID-DL","CPUID-ST","CS","CS-ST","CS2","CS3","CWN","DAT","DDI","DDIS","DDIS2","DGY","DIG-A","DIG-N","DIG-OFF","DIG-ON","DIG-P","DIG-S","DNA","DNA2","DPO","DVDX","DVDX2","EAC","F-CT","F-ET","FAC","FF2-DL","FJOSE","FJS","FKR","FLV","FM","FTB","FTB2","FTB3","FW-ASK","FW-QBD","FW-SRS","FWT","FW2V5","FXTV5-DL","GAM4","GAM-ASK-T4","GAM-SRS","GAM-SRS-T3","GAM-QBD","GAM-T1","GAM-T2","GAM-T3","GDSJE","GET-SRS","GET2-SRS","GET3-SRS","GGSV5","GGSV5-DL","GOM","GSUNE","GYG","HIY-SRS","HULU","ICM-SRS","IEAK9","IMB","IMB-DL","IMT","JDR","JMYV5","KG-ASK","KYT","LMW","LMW2","LMW3","LMW4","LMW-BETA","LMW-BETA2","LOL","LPLV5","LUC","MDG","MEB","MGN","MGX","MMB","MMG","MOV","MOV-DL","MP3","MP3DS","MP3FB","MP3P2","MP3R-ASK","MP3R-DL","MP3R-QBD","MP3R-SRS","MP3R4","MP3R5","MP3R6","MP3SF","MP3SW","MP3TR","MP3SD","MPC","MPC2","MROV5","MYC","MYC-ASK","MYC-DL","MYC-SRS","MYC-QBD","NG1V5","NG2V5","NG3V5","NG4V5","NSC-S","NSC-O","NSC-E","NSC-P","NSC-A","NSC-N","NSC-NS","NR1V5","NRV5","NXZ","ORJ-SAT","ORJ2","ORJ2-SAT","OSUB","OTV5","OVO","PCH","PDF","PDF2","PDO","PFN","PLF3","PLF4","PLTV5","PLTV5-DL","PLTV5-DL2","POS","POS2","PTF","PTJ","PTV2","PTV2-DL","PTV5","QSYS","RAD","S99","SBES","SCV5","SDT","SE","SF","SKR","SNAPT","SNP-ST","SP","SP2","SPC","SPT","SRFV5","SS2V5","SS3V5","STC2","STC4","STC-SRS","STC2-SRS","STC3-SRS","STC4-SRS","STK","STK2","STK3","STK4","TEMU","THE","TKR","TM","TMN2","TTB","TTR","TVTYV5","UKT","UNI","URS","VDJ","VRS","VD","VD-DL","VZ3","WBG-DL","WBG-ST","WBM2","WBV5-DL","WCL","WCLV5","WCL2V5","WCR","WCV5","WME","WSV5","WZP","YLC","ZMR","ZTV","ZTV-DL","FBK","FB-BETA","FB-PRO","FB-APP","FB-ASK","FB-OD","FB-SEM","MDF","MDF-BETA","NRO","NRO2","NRO3","UTR","UTR2","WID","WID-BETA"]}

function isLatestClient(clientversion) {
	try{
		var versionString=clientversion.split('.');
		if(parseInt(versionString[0]) >= 2 && parseInt(versionString[1]) >= 6 && parseInt(versionString[2]) >= 8){
			return true;
		}
	}catch(e){
	}
	return false;
}

function is64Bit(){
	if(window.navigator.userAgent.indexOf('WOW64')>-1 || window.navigator.platform=='Win64')
		return true;
	else 
		return false;
	
}

function isSupportedOS() {
	try {
		if (window.navigator.appVersion.indexOf("Windows NT 5.1") != -1 || window.navigator.appVersion.indexOf("Windows NT 5.2") != -1 || window.navigator.appVersion.indexOf("Windows NT 6.0") != -1 || window.navigator.appVersion.indexOf("Windows NT 6.1") != -1 || window.navigator.appVersion.indexOf("Windows NT 6.2") != -1) {
			return true
		}
	} catch(e)
	{
	}
	return false;
}

function makeoffer(partnerID) {
	try {
		for (var i=0; i < jsonString.makeofferdisabled.length; i++) {
			if(partnerID == jsonString.makeofferdisabled[i]){
				unsupportedBrowser ="3:Ineligible Chrome";
				return false;
			}
		}
	} catch(e) 
	{
	}
	return true;
}

function isEmpty (checkObj) {
	 var key;
     if (checkObj === "" || checkObj === 0 || checkObj === "0" || checkObj === null || checkObj === false || typeof checkObj === 'undefined') {
        return true;
		}
     if (typeof checkObj == 'object') { 
		for (key in checkObj) {
            return false;
        }
        return true;
    } 
    return false;
}

function getIncumbentPartners() {
	var incumbentPartners;
	var incumbentPartnerIDs=""; 
	try {
		if(is64Bit()){
			incumbentPartners = pipgetRegValue("HKEY_LOCAL_MACHINE\\SOFTWARE\\Wow6432Node\\AskPartnerNetwork\\Toolbar\\shared\\","tbsinstalled",0);
		}else{
			incumbentPartners = pipgetRegValue("HKEY_LOCAL_MACHINE\\SOFTWARE\\AskPartnerNetwork\\Toolbar\\shared\\","tbsinstalled",0);
		}
		if(isEmpty(incumbentPartners)){
			return incumbentPartnerIDs;
		}
		incumbentPartnerIDs = incumbentPartners.split(",");
	}catch (e)
	{
	}
	return incumbentPartnerIDs;
}

function isBlockListed(tlbrID) {
	try {
		for(var j=0; j<jsonString.blocklistedPartners.length;j++){
			if(tlbrID == jsonString.blocklistedPartners[j]) {
				return true;
			}
		}
	} catch (e)
	{
	}
	return false;
}

function getReasonCode(reasonDescription) {
	if(isLatestClient(version)) return reasonDescription;
	return false;
}

function v6eligibleChecklist(partnerID,incPartners){
	try{
		var incumbentTbType;
		var incumbentPartnerRegPath;
		if(incPartners.length < 1 || incPartners.length >= 4) {
			reasonString="8:Side by side limit exceeded";
			return false; 
		}
			for(var k=0; k<incPartners.length;k++){
				if(is64Bit()){
					incumbentPartnerRegPath = "HKEY_LOCAL_MACHINE\\SOFTWARE\\Wow6432Node\\AskPartnerNetwork\\Toolbar\\";					
				} else {
					incumbentPartnerRegPath = "HKEY_LOCAL_MACHINE\\SOFTWARE\\AskPartnerNetwork\\Toolbar\\";				
				}
				incumbentPartnerRegPath+=incPartners[k]+"\\Macro\\";
				incumbentTbType = pipgetRegValue(incumbentPartnerRegPath,"tb-type",0);
				if(partnerID == incPartners[k]){
					reasonString="1:V6 Offer already present with same partnerID";
					return false;
				}
				if(incumbentTbType.toLowerCase() == "vanilla" && tbType.toLowerCase() == "vanilla"){
					reasonString="4:Prior toolbar type(Vanilla) " +incPartners[k];
					return false
				}
				if(isBlockListed(incPartners[k])) {
					reasonString="6:Block list v6 - incumbent toolbar is listed as block list "+incPartners[k];
					return false;
				}
			}
	} catch(e)
	{		
	}
	return true;
}

function isV5ToolbarOffered(){
	try{
		v5toolbarOffered=true;
		return true;
	}catch(e)
	{
	}

}

function checkPrimaryToolbarOffered(){
	try{
		if(v5toolbarOffered){
			return false;
		}
		return true;
	
	}catch(e){
	}
}

function getProductVersion(productCode){
	try{
		var productVersion =system.getProductVersion(productCode);
		return productVersion;
	}catch(e)
	{
	}
}

function pipgetRegValue(registryPath,regValue,n){
	try {
		var registryValue=system.getRegValue(registryPath,regValue,n);
		return registryValue;
	} catch (e) 
	{
	}
}

function isSupportedBrowser(partnerID) {
	try {
		var defaultbrowserPath;
		var defaultbrowserAppPath;
		var defaultBrowser;
		if (window.navigator.appVersion.indexOf("Windows NT 6.0") != -1 || window.navigator.appVersion.indexOf("Windows NT 6.1") != -1) {
			defaultbrowserAppPath=pipgetRegValue("HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\FileExts\\.htm\\UserChoice","Progid",0);
			if(!isEmpty(defaultbrowserAppPath)) {
				defaultbrowserPath="HKEY_CLASSES_ROOT\\"+defaultbrowserAppPath+"\\shell\\open\\command\\";
				defaultBrowser=pipgetRegValue(defaultbrowserPath,"",0);
			}else
				{
					defaultBrowser = pipgetRegValue("HKEY_CURRENT_USER\\Software\\Clients\\StartMenuInternet\\","",0);
					if(isEmpty(defaultBrowser)){
						defaultBrowser = pipgetRegValue("HKEY_LOCAL_MACHINE\\Software\\Clients\\StartMenuInternet\\","",0)
					}
				}
		} else {
				defaultBrowser=pipgetRegValue("HKEY_CURRENT_USER\\Software\\Classes\\http\\shell\\open\\command\\","",0);
				if(isEmpty(defaultBrowser)) {
					defaultBrowser=pipgetRegValue("HKEY_CLASSES_ROOT\\http\\shell\\open\\command\\","",0);
				}
				if(isEmpty(defaultBrowser))
				{
					defaultBrowser = pipgetRegValue("HKEY_CURRENT_USER\\Software\\Clients\\StartMenuInternet\\","",0);
					if(isEmpty(defaultBrowser)){
						defaultBrowser = pipgetRegValue("HKEY_LOCAL_MACHINE\\Software\\Clients\\StartMenuInternet\\","",0)
					}
				}
			}
		if(!isEmpty(defaultBrowser) && (defaultBrowser.toLowerCase().indexOf("firefox.exe") > -1 || defaultBrowser.toLowerCase().indexOf("iexplore.exe") > -1 || (defaultBrowser.toLowerCase().indexOf("chrome.exe") > -1 && makeoffer(partnerID)))) {
			return true;
		}
	} catch (e)
	{
	}
	return false;
}

function isV5TlbrEligible(){
	try{
		var checkV5Installed = getProductVersion("{86D4B82A-ABED-442A-BE86-96357B70F4FE}");
		if(isEmpty(checkV5Installed)) return true;
		if(checkOverinstall()) {
			v6SaturationToolbarOfferFlag = true;
			return true;
		}
	}catch(e)
	{
	}
	return false;
}

function isV6TlbrEligible() {
	try{
		var incumbentPartnerList = getIncumbentPartners(); 

		if(isEmpty(incumbentPartnerList)) return true;
			if(v6eligibleChecklist(primaryTlbrID,incumbentPartnerList)){
				v6SaturationToolbarOfferFlag = true;
				return true;
			}
		
	}catch(e)
	{
	}
	return false;
}

function isSaturationInstalled(partnerid) {
	try{
		var incumbentTlbrList;
		incumbentTlbrList = getIncumbentPartners();
		if(!isEmpty(incumbentTlbrList)){
			for(var i=0; i<incumbentTlbrList.length;i++){
				if((incumbentTlbrList[i].indexOf("-SAT") > -1 && satTlbrID.indexOf("-SAT")> -1)) {
					partnerid.value=incumbentTlbrList[i];
					return true;
				}
			}
		}
	}catch(e){
	}
	return false;
}

function checkV5ToolbarInstalled(){
	try{
		var v5TlbrID;
		if (!isSupportedOS()) return false;
		if(!isSupportedBrowser(primaryTlbrID)){
			v6SaturationToolbarOfferFlag = false;
			return getReasonCode(unsupportedBrowser);
		}
		if(!isV5TlbrEligible()){
			v6SaturationToolbarOfferFlag = false;
			if(is64Bit()){
				v5TlbrID = pipgetRegValue("HKEY_LOCAL_MACHINE\\Software\\Wow6432Node\\AskToolbar\\Macro","tb",0);
			} else {
				v5TlbrID = pipgetRegValue("HKEY_LOCAL_MACHINE\\Software\\AskToolbar\\Macro","tb",0);
			}
			if(v5TlbrID == primaryTlbrID) v5ToolbarInstalled=v5ToolbarInstalled+"Same Partner ID "+v5TlbrID+"";
			v5ToolbarInstalled = v5ToolbarInstalled +" "+v5TlbrID;
			return getReasonCode(v5ToolbarInstalled);
		}
	    				
	}catch(e)
	{
	}
	v6SaturationToolbarOfferFlag = true;
	return true;
}

function v6installChecker() {
	try{
		if (!isSupportedOS()) return false;
		if(!isSupportedBrowser(primaryTlbrID))
		{
			v6SaturationToolbarOfferFlag = false;
			return getReasonCode(unsupportedBrowser);
		}
		if (isBlockListed(satTlbrID))
		{
			blocklistedPartner=blocklistedPartner+" "+satTlbrID;
			return getReasonCode(blocklistedPartner);
		}
		if(!isV6TlbrEligible()){
			v6SaturationToolbarOfferFlag = false;
			return getReasonCode(reasonString);
		}	
	}catch(e)
	{
	}
	v6SaturationToolbarOfferFlag = true;
	return true;
}

function partneridfunc(){
	this.value="";
}

function offerV6SaturationToolbar(){
	
	try{
		var partnerid =new partneridfunc();
		if(v6SaturationToolbarOfferFlag) {
			return getReasonCode(v5Offerpresented);
		}
		if (!isSupportedOS()) return false;
		if(!isSupportedBrowser(satTlbrID))
		{
			return getReasonCode(unsupportedBrowser);
		}
		if (isBlockListed(satTlbrID))
		{
			return getReasonCode(blocklistedPartner);
		}
		if (isSaturationInstalled(partnerid))
		{
			v6SatInstalled=v6SatInstalled +" "+ partnerid.value;
			return getReasonCode(v6SatInstalled);
		}
		return true;
	}catch(e)
	{
	}
	return false;
}

function checkOverinstall() {
	try{
		var getIEversion ="";
		var isIE9extnenabled="";
		var toolbarDisableFlag="";
		var getIEversion=browser.ieVersion;
		if(parseInt(getIEversion) > 8){
			parseInt(isIE9extnenabled,2)=system.getRegValue("HKEY_CURRENT_USER\\Software\\Microsoft\\Internet Explorer\\Approved Extensions","{D4027C7F-154A-4066-A1AD-4243D8127440}",0);
		}
		toolbarDisableFlag = system.getRegValue("HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Ext\\Settings\\{D4027C7F-154A-4066-A1AD-4243D8127440}","Flags",0);
		if ( parseInt(toolbarDisableFlag) == 64 || parseInt(toolbarDisableFlag) == 1){
			return true;
		}		
		
	}catch(e){
		if(parseInt(getIEversion) > 8){
			if(e.message =="CSystemUtil::getRegValue Failed : UnSupported Variant Type of 3"){
				return false;
			}
			if(e.message =="CSystemUtil::getRegValue Failed : UnSupported Variant Type of 0"){
				return true;
			}
		}
		if(e.message =="CSystemUtil::getRegValue Failed : UnSupported Variant Type of 0"){
				return false;
		}
		return true;
	}
	return false;
}








