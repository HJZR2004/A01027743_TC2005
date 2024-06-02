/*  Control the movemen of a game paddle.

Julian Ramirez.
2023-9-abril  */
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class playerOneMotion : MonoBehaviour
{

    [SerializeField] float speed;
    [SerializeField] Vector2 direction;
    [SerializeField] KeyCode positiveKey;
    [SerializeField] KeyCode negativeKey;
    [SerializeField] float limit;
    // Start is called before the first frame update
    void Start()
    {
    
    }

    // Update is called once per frame
    void Update()
    {
          if(Input.GetKey(positiveKey)&& transform.position.y < limit){
            transform.Translate(direction * speed * Time.deltaTime);}
        else if (Input.GetKey(negativeKey)&& transform.position.y > -limit)
        transform.Translate(-direction * speed * Time.deltaTime);
        
    }
}
