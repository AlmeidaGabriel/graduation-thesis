// iPhone gyroscope-controlled camera demo v0.3 8/8/11
// Perry Hoberman <hoberman@bway.net>
// Directions: Attach this script to main camera.
// Note: Unity Remote does not currently support gyroscope. 

private var gyroBool : boolean;
private var gyro : Gyroscope;
private var rotFix : Quaternion;

function Start() {
	
	var originalParent = transform.parent; // check if this transform has a parent
	var camParent = new GameObject ("camParent"); // make a new parent
	camParent.transform.position = transform.position; // move the new parent to this transform position
	transform.parent = camParent.transform; // make this transform a child of the new parent
	camParent.transform.parent = originalParent; // make the new parent a child of the original parent
	
	gyroBool = SystemInfo.supportsGyroscope;//Input.isGyroAvailable;
	
	if (gyroBool) {
		
		gyro = Input.gyro;
		gyro.enabled = true;
		
		//if (Screen.orientation == ScreenOrientation.LandscapeLeft) {
		//	camParent.transform.eulerAngles = Vector3(90,90,0);
		//} 
		if (Screen.orientation == ScreenOrientation.Portrait) {
			camParent.transform.eulerAngles = Vector3(0,0,0);
		}
		
		//if (Screen.orientation == ScreenOrientation.LandscapeLeft) {
		//	rotFix = Quaternion(0,0,0.7071,0.7071);
		//} else 
		if (Screen.orientation == ScreenOrientation.Portrait) {
			rotFix = Quaternion(0,0,1,0);
		}
	} else {
		print("NO GYRO");
	}
}

function Update () {
	if (gyroBool) {
		var camRot : Quaternion = gyro.attitude * rotFix;
		var pitch : float = gyro.attitude.x;
		var roll : float = gyro.attitude.y;

		//transform.localRotation = camRot;//xoay het
		//transform.localRotation = Quaternion(0,camRot.y,0,camRot.w);
		transform.localRotation = Quaternion(0,camRot.y,0,camRot.w);
	}
}
