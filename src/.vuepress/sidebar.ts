import { sidebar } from "vuepress-theme-hope";

export default sidebar({
	
  "/": [
	  
	  
    "",
    {
      text: "家庭",
      collapsible: true,
      icon: "people-roof",
      prefix: "article/Family/",
      link: "",
      children: "structure",
    },


    {
      text: "总结/心得",
      collapsible: true,
      icon: "globe",
      prefix: "article/Summary/",
      children: "structure",
    },
    {
      text: "Mr.Arthur",
      collapsible: true,
      icon: "person",
      prefix: "article/Arthur/",
      children: "structure",
    },
/*{
      text: "关于我们",
      icon: "circle-info",
      link: "intro",
    },
    {
      text: "WIFI",
      icon: "wifi",
      link: "wifi",
    },*/
  ],
  
 
});
