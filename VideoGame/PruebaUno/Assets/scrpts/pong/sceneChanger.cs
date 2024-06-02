using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class sceneChanger : MonoBehaviour
{
    public static void GoTo(string sceneName){
        UnityEngine.SceneManagement.SceneManager.LoadScene(sceneName);}
}
