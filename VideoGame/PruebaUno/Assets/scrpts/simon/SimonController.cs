using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class SimonControler : MonoBehaviour
{

    [SerializeField] List<SimonButton>buttons;
    [SerializeField] List<int>sequence;
    [SerializeField] float delay;
    [SerializeField] int level;
    [SerializeField] bool playerTurn = false;

    [SerializeField] int counter = 0;
    [SerializeField] int numButtons;
    [SerializeField] GameObject buttonPrefab;
    [SerializeField] Transform buttonParent;
    [SerializeField] TMP_Text scoreText;
    [SerializeField] GameObject LoseScreen;
    [SerializeField] TMP_Text highscoreText;

    int highScore = 0;



    
    void Start(){
        PrepareButtons();
        UpdateScoreDisplay();
        LoseScreen.SetActive(false);
        UpdateHighscore();}

    void PrepareButtons(){
        for (int i = buttons.Count - 1; i >= 0; i--){
            Destroy(buttons[i].gameObject);}

        buttons.Clear();

        for (int i = 0; i < numButtons; i++) {
            int index = i;
            
            GameObject newButton = Instantiate(buttonPrefab, buttonParent);
            newButton.GetComponent<Image>().color = Color.HSVToRGB((float)index/numButtons, 1, 1);

            
            newButton.GetComponent<SimonButton>().Init(index);
            buttons.Add(newButton.GetComponent <SimonButton>());
            buttons[i].gameObject.GetComponent<Button>().onClick.AddListener(() => ButtonPressed(index));}
    
        AddToSequence();}

    public void ButtonPressed(int index) {
        if (playerTurn) {
            if (index == sequence[counter++]) {
                buttons[index].Highlight();
                if (counter == sequence.Count) {
                    playerTurn = false;
                    level++;
                    counter = 0;
                    AddToSequence();
                    UpdateScoreDisplay();

                    if (level > highScore) {
                        highScore = level;
                        UpdateHighscore();}}} 
            else {
                Debug.Log("Game Over!");
                ShowLoseScreen();}}}

    void AddToSequence(){
        sequence.Add(Random.Range(0, buttons.Count));
        StartCoroutine(PlaySequence());}

    IEnumerator PlaySequence(){
        yield return new WaitForSeconds(delay);
        foreach (int index in sequence) {
            buttons[index].Highlight();
            yield return new WaitForSeconds(delay);}
        playerTurn = true;}



    public void RestartGame(){
    StopAllCoroutines();

    foreach (var button in buttons){
        button.ResetButton();}

    LoseScreen.SetActive(false);
    sequence.Clear();
    counter = 0;
    level = 0; 
    playerTurn = false;
    UpdateScoreDisplay();

    PrepareButtons();
    AddToSequence();} 

    IEnumerator WaitAndStartSequence(){
        yield return new WaitForSeconds(delay); 
        AddToSequence();}

    private void ShowLoseScreen(){
        LoseScreen.SetActive(true);

        if (level > highScore) {
            highScore = level;
            UpdateHighscore();}}

     void UpdateScoreDisplay(){
        scoreText.text = $"score: {level}";}

    void UpdateHighscore(){
        highscoreText.text = $"high score: {highScore}";}

}