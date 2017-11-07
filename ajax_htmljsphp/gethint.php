<?php

/**
 * @Author: Administrator
 * @Date:   2017-11-07 22:30:35
 * @Last Modified by:   Administrator
 * @Last Modified time: 2017-11-07 22:51:00
 */
// Fill up array with names
$a[]="Anna";
$a[]="Brittany";
$a[]="Cinderella";
$a[]="Diana";
$a[]="Eva";
$a[]="Fiona";
$a[]="Gunda";
$a[]="Hege";
$a[]="Inga";
$a[]="Johanna";
$a[]="Kitty";
$a[]="Linda";
$a[]="Nina";
$a[]="Ophelia";
$a[]="Petunia";
$a[]="Amanda";
$a[]="Raquel";
$a[]="Cindy";
$a[]="Doris";
$a[]="Eve";
$a[]="Evita";
$a[]="Sunniva";
$a[]="Tove";
$a[]="Unni";
$a[]="Violet";
$a[]="Liza";
$a[]="Elizabeth";
$a[]="Ellen";
$a[]="Wenche";
$a[]="Vicky";

//get the q parameter from URL
$q=$_GET["q"];

//lookup all hints from array if length of q>0
if (strlen($q) > 0)
{
$hint="";
for($i=0; $i<count($a); $i++)
  {
  if (strtolower($q)==strtolower(substr($a[$i],0,strlen($q))))
    {
    if ($hint=="")
      {
      $hint=$a[$i];
      }
    else
      {
      $hint=$hint." , ".$a[$i];
      }
    }
  }
}

//Set output to "no suggestion" if no hint were found
//or to the correct values
if ($hint == "")
{
$response="no suggestion";
}
else
{
$response=$hint;
}

//output the response
echo $response;


// 被 JavaScript 代码调用的服务器页面是一个名为 "gethint.php" 的简单服务器页面。
// "gethint.php" 中的代码会检查名字数组，然后向客户端返回对应的名字：
// 如果存在从 JavaScript 送来的文本 (strlen($q) > 0)，则：
// 1找到与 JavaScript 所传送的字符相匹配的名字
// 2如果找到多个名字，把所有名字包含在 response 字符串中
// 3如果没有找到匹配的名字，把 response 设置为 "no suggestion"
// 4如果找到一个或多个名字，把 response 设置为这些名字
// 5把 response 发送到 "txtHint" 占位符

?>