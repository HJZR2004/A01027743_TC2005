using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;



public class SimonButton : MonoBehaviour
{
    [SerializeField] float delay;
    Color originalColor;



    AudioSource audioSource;
    public void Init(int index)
    {
        originalColor = GetComponent<Image>().color;
        audioSource=GetComponent<AudioSource>();
        audioSource.clip=Resources.Load<AudioClip>($"Audio/{index}");}

    public void Highlight()
    {
        audioSource.Play();
        StartCoroutine(ChangeColor());}

    IEnumerator ChangeColor()
    {
        GetComponent<Image>().color = Color.white;
        yield return new WaitForSeconds(delay);
        GetComponent<Image>().color = originalColor;}

    public void ResetButton(){
        GetComponent<Image>().color = originalColor;
    }
}