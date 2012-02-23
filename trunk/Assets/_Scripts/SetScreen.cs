
using UnityEngine;
using System.Collections;

public class SetScreen : MonoBehaviour
{
	void Awake ()
	{
		// Setup resolution to be horizontal
		//iPhoneSettings.screenOrientation = iPhoneScreenOrientation.LandscapeLeft;
		Screen.orientation = ScreenOrientation.LandscapeLeft;
	}
}
