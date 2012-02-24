var speed = 6.0;
var jumpSpeed = 8.0;
var gravity = 20.0;

private var moveDirection = Vector3.zero;
private var baseDirection : Vector3 = Vector3.zero;

private var controller : CharacterController;
private var trans : Transform;

function Start ()
{
	controller = GetComponent(CharacterController);
	trans = transform;
}

function ObjectMove() {
	var deltaTime = Time.deltaTime;
	
	// We are grounded, so recalculate movedirection directly from axes
	moveDirection = baseDirection;
	moveDirection = trans.TransformDirection(moveDirection);
	moveDirection *= speed;
	Debug.Log ("Move thu xem truoc "+moveDirection);
	moveDirection.y = 0.0;
	if (moveDirection.sqrMagnitude < 0.1)
	{
		Debug.Log("Break");
		return;
	}
		

	// Apply gravity
	moveDirection.y -= gravity * deltaTime;
	
	// Move the controller
	Debug.Log ("Move thu xem "+moveDirection);
	controller.Move(moveDirection * deltaTime);
}

function SetMoveDirection (moveDir : Vector3)
{
	baseDirection = moveDir;
}

function ObjectJump()
{
	var deltaTime = Time.deltaTime;
	
	// We are grounded, so recalculate movedirection directly from axes
	moveDirection = baseDirection;
	moveDirection = trans.TransformDirection(moveDirection);
	moveDirection *= 100;

	if (moveDirection.sqrMagnitude < 0.1)
		return;

	// Apply gravity
	//moveDirection.y -= gravity * deltaTime;
	
	// Move the controller
	for (var i:float = 1.0; i < 3.0; i++)
	{
		controller.Move(moveDirection * i / 3 * deltaTime);
		var a:float = i/3;
		yield WaitForSeconds(0.035);
		
	}
	
	//controller.Move(moveDirection * deltaTime);
	yield WaitForSeconds(0.1);
	moveDirection.y = -moveDirection.y;
	controller.Move(moveDirection * deltaTime);
}


@script RequireComponent(CharacterController)