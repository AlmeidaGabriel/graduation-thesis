
var fpsWalker : FPSWalkeriPhone;
var touchDeltaPosition:Vector2;

function Start ()
{
}

function DoubleTap (waitTime : float) 

{

    for (var event : iPhoneTouch in iPhoneInput.touches) 

    {                   
        if(event.tapCount >= 2 && event.phase == iPhoneTouchPhase.Ended)

        {
            yield WaitForSeconds(waitTime);
            StopAllCoroutines();
            
            var lDiff3 : Vector3 = Vector3 (0, 1, 0);
			
			// make sure direction is inside unit sphere
			if (lDiff3.sqrMagnitude > 1)
				lDiff3.Normalize();

			fpsWalker.SetMoveDirection (lDiff3);
            fpsWalker.ObjectJump();
        }
    }

}

function Update ()
{	
	
	for (var event : iPhoneTouch in iPhoneInput.touches) 

    {                   
        if(event.tapCount >= 2 && event.phase)

        {
        	//Debug.Log ("Touch double");
            DoubleTap(0.3);
        }
        
        else
        {
        	// pull information out of each touch event
			// empty out the touch event array, set it to the length of the number of touches
			//var touch : Touch = Input.GetTouch(i);
				
				// check the phase FIRST
				if (event.phase == iPhoneTouchPhase.Began)
				{
					//Debug.Log ("Touch began");
				}
				else if (event.phase == iPhoneTouchPhase.Moved)
				{
					//Debug.Log ("Touch move");
					touchDeltaPosition = Input.GetTouch(0).deltaPosition;
					var lDiff3 : Vector3 = Vector3 (touchDeltaPosition.x, 0, touchDeltaPosition.y);
					
					// make sure direction is inside unit sphere
					if (lDiff3.sqrMagnitude > 1)
						lDiff3.Normalize();
		
					fpsWalker.SetMoveDirection (lDiff3);
				}
				else if (event.phase == iPhoneTouchPhase.Stationary)
				{
					//Debug.Log ("Touch stationary");
				}
				else if (event.phase == iPhoneTouchPhase.Ended || event.phase == iPhoneTouchPhase.Canceled)
				{
					//Debug.Log ("Touch end");
					fpsWalker.SetMoveDirection (Vector3.zero);
				}
				fpsWalker.ObjectMove();
			}
        	
    }
	
	
	
}
