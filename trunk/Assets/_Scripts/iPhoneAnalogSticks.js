
var touchZoneWidth : int = 80;
var touchZoneHeight : int = 80;
private var leftStickDown : boolean = false;
private var rightStickDown : boolean = false;
private var leftStickBounds : Rect;
private var leftStickCenter : Vector2;
private var leftStickTouchId : int = -1;
private var rightStickTouchId : int = -1;
private var countTouchBegin:int = 0;

var fpsWalker : FPSWalkeriPhone;
//var look1 : MouseLookiPhone;
//var look2 : MouseLookiPhone;

function Start ()
{
	// let's be in widescreen mode
	Screen.orientation = ScreenOrientation.LandscapeLeft;
	// set the bounds at start, so we can see these in the inspector
	leftStickBounds = Rect(0, 0, touchZoneWidth, touchZoneHeight);
	leftStickCenter = Vector2 (touchZoneWidth * 0.5, touchZoneHeight * 0.5);
}

DoubleTap(2.0);

 

DoubleTap(2.0);

 

function DoubleTap (waitTime : float) 

{
    for (var event : iPhoneTouch in iPhoneInput.touches) 

    {                   
        if(event.tapCount >= 2 && event.phase == iPhoneTouchPhase.Ended)

        {

            yield WaitForSeconds(0.3);

            StopAllCoroutines();
			Debug.Log ("double touch Ended");
			
			fpsWalker.SetJump();
        }

    }

} 


function Update ()
{	
	// pull information out of each touch event
	// empty out the touch event array, set it to the length of the number of touches
	/*
	var count = Input.touchCount;
	for (var i : int = 0; i < count; i++)
	{
		// cram the touch event into the array
		var touch : Touch = Input.GetTouch(i);
		
		// check the phase FIRST
		if (touch.phase == TouchPhase.Began)
		{
			print("bat dau touch");
			print("bat dau touch count"+count);
			// check the actual point of the touch
			// if it's inside either button, store the position as the center
			
			// only perform this check if the left stick isn't already pressed
			/*
			if (!leftStickDown)
			{
				// check if we pressed down on the left stick
				leftStickDown = IsThumbInsideBounds(touch.position, leftStickBounds);
				// if we did, don't even check the right stick
				if (leftStickDown)
				{
					leftStickTouchId = touch.fingerId;
					continue;
				}
			}
			/*
			// only perform this check if the right stick isn't already pressed
			if (!rightStickDown)
			{
				// we consider whole screen except the left-stick area as a right-stick
				rightStickDown = !IsThumbInsideBounds(touch.position, leftStickBounds);
				if (rightStickDown)
				{
					rightStickTouchId = touch.fingerId;
					continue;
				}
			}*/
			/*
			countTouchBegin++;
			if (countTouchBegin == 2)
			{
				countTouchBegin = 0;
				Debug.Log ("Double touch");
				print("Double touch");
			}
			
		}
		else 
		{
			print("touch khac");
			countTouchBegin = 0;
			if (touch.phase == TouchPhase.Moved)
			{
				// figure out if we're looking at the left thumb
				if (leftStickDown && leftStickTouchId == touch.fingerId)
				{
					var lDiff : Vector2 = touch.position - leftStickCenter;
					var lDiff3 : Vector3 = Vector3 (lDiff.x, 0, lDiff.y);
					
					// make sure direction is inside unit sphere
					if (lDiff3.sqrMagnitude > 1)
						lDiff3.Normalize();
					fpsWalker.SetMoveDirection (lDiff3);
				}
				/*
				// figure out if we're looking at the right thumb
				if (rightStickDown && rightStickTouchId == touch.fingerId)
				{
					look1.SetInput (touch.deltaPosition);
					look2.SetInput (touch.deltaPosition);
				}
				*/
				/*
			}
			if (touch.phase == TouchPhase.Stationary)
			{
			/*
				// stop the right stick from rotating if it's stationary
				if (rightStickDown && rightStickTouchId == touch.fingerId)
				{
					look1.SetInput (Vector2.zero);
					look2.SetInput (Vector2.zero);
				}
				*/
				/*
			}
			if (touch.phase == TouchPhase.Ended || touch.phase == TouchPhase.Canceled)
			{
				// release left stick
				if (leftStickDown && leftStickTouchId == touch.fingerId)
				{
					leftStickDown = false;
					fpsWalker.SetMoveDirection (Vector3.zero);
					leftStickTouchId = -1;
				}
				/*
				// release 2nd finger
				if (rightStickDown && rightStickTouchId == touch.fingerId)
				{
					rightStickDown = false;
					look1.SetInput (Vector2.zero);
					look2.SetInput (Vector2.zero);
					rightStickTouchId = -1;
				}
				*/
				/*
			}
		}
	}
	*/
	//look1.CustomUpdate();
	//look2.CustomUpdate();
	
	
	
	
	//fpsWalker.CustomUpdate();
	
	DoubleTap(2.0);
}

function IsThumbInsideBounds (touchPosition : Vector2, analogBounds : Rect)
{
	return (analogBounds.Contains (touchPosition));
}
