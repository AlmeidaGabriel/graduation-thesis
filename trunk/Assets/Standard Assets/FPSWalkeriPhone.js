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
	
	animation["JumpAnima"].speed = 13; //set the firing animation to a little faster
	animation.wrapMode = WrapMode.Loop; 
	//animation.Play ("idle", PlayMode.StopAll);	//start by playing the idle animation in loop
}

function CustomUpdate() {
	var deltaTime = Time.deltaTime;
	
	// We are grounded, so recalculate movedirection directly from axes
	moveDirection = baseDirection;
	moveDirection = trans.TransformDirection(moveDirection);
	moveDirection *= speed;

	if (moveDirection.sqrMagnitude < 0.1)
		return;

	// Apply gravity
	moveDirection.y -= gravity * deltaTime;
	
	// Move the controller
	
	controller.Move(moveDirection * deltaTime);
}

function SetMoveDirection (moveDir : Vector3)
{
	baseDirection = moveDir;
}

function SetJump()
{
	Debug.Log("Begin Jump");
	animation.wrapMode = WrapMode.Clamp;
	animation.Play("JumpAnima");
	/*
	if (animation.IsPlaying("idle"))
	{
		Debug.Log("Jump");
		animation.wrapMode = WrapMode.Clamp;
		animation.Play("JumpAnima");
	}
	*/
}

@script RequireComponent(CharacterController)