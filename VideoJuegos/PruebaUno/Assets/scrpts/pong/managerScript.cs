/* game manager for the pong demo.

julian ramirez
A01027743.
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class managerScript : MonoBehaviour
{

    [SerializeField] GameObject ball;
    [SerializeField] GameObject ballPreFab;
    [SerializeField] float speed;
    
    [SerializeField]TMP_Text scoreLeft;
    [SerializeField]TMP_Text scoreRight;
    
    public int pointsLeft;
    public int pointsRight;
    // Start is called before the first frame update
    void Start(){InitGame();}

    // Update is called once per frame
    void Update()
    {
        if(Input.GetKeyDown(KeyCode.R)){
            resetGame();}
    }


    /*Start a new game.*/


    IEnumerator ServeBall(){
        yield return new WaitForSeconds(1.0f);
        ball= Instantiate(ballPreFab);
        ball.GetComponent<Rigidbody2D>().velocity = Random.insideUnitCircle.normalized * speed;}


    void InitGame(){
        StartCoroutine(ServeBall());
        }

    public void Score(string side){
        if(side =="left"){
            pointsLeft++; 
            scoreLeft.text = pointsLeft.ToString();
            InitGame();}

        else if(side =="right"){
            pointsRight++;
            scoreRight.text=pointsRight.ToString();
            InitGame();}}

    public void resetGame(){
        if(ball != null){
            Destroy(ball);
            InitGame();}

        
    }
    
}
