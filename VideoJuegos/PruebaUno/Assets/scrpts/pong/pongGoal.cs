/*
detect when te ball hits the wall.
*/
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class pongGoal : MonoBehaviour
{
    [SerializeField] string side;

    //Variable to reference another script

    managerScript manager;

    // Start is called before the first frame update
    void Start()
    {
        manager=GameObject.FindWithTag("GameController").GetComponent<managerScript>();
    }

    void OnCollisionEnter2D(Collision2D other){
        manager.Score(side);
        Destroy(other.gameObject);
    }

}
