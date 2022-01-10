let posttextbox=document.getElementById("post-text");
let postmain=document.getElementById("post-section");
let major=document.getElementById("major");
let mainright=document.getElementById("main-right");
let middlestories=document.getElementById("middle-stories");
let mainleft=document.getElementById("main-left");
let postbutton=document.getElementById("post-button");
let posted=document.getElementById("posted");
let posted_postes=document.getElementById("posted-postes");
//let likeicon=document.getElementById("like-icon");
//postbutton.disabled=true;


function postbuttonadjustment() {
    if(posttextbox.value=="") { 
           postbutton.style.opacity="0.4";
       } else { 
            postbutton.style.opacity="1";
       }
   }


function toggleLike(btn){
    //btn.classList.toggle("fas","fa-thumbs-up");
    if(btn.classList.contains("far","fa-thumbs-up"))
    {
    btn.classList="fas";
    btn.classList.add("fa-thumbs-up");
    btn.classList.add("likencomment");
    btn.style.color="#4267B2";
    //console.log("ok");
    }   
    else
    {
    btn.classList="far";
    btn.classList.add("fa-thumbs-up");
    btn.classList.add("likencomment");
    //console.log("pk");
    btn.style.color="#585858";
}
}
posttextbox.addEventListener("focus",function(){
    posttextbox.value="";
    //postbutton.disabled=false;
    postmain.style.transform="scale(1.08)";
    posttextbox.style.height="80px";
    mainleft.style.filter="blur(2px)";
    mainright.style.filter="blur(2px)";
    middlestories.style.filter="blur(2px)";
    //postbutton.style.visibility="visible";
})
posttextbox.addEventListener("blur",function(){
    postmain.style.transform="scale(1)";
    /*posttextbox.style.height="60px";*/
    mainleft.style.filter="none";
    mainright.style.filter="none";
    middlestories.style.filter="none";
    //postbutton.style.visibility="hidden";
    //posttextbox.value="";
})

/*-----------------------------------*/

const drop=document.createElement("div");
drop.classList.add("mydrop");
const edit_post=document.createElement("span");
edit_post.classList.add("edit-post");
edit_post.innerHTML="Edit Post";
const delete_post=document.createElement("span");
delete_post.classList.add("edit-post");
delete_post.innerHTML="Delete Post";
drop.appendChild(edit_post);
drop.appendChild(delete_post);

function dropdownit(x){
x.appendChild(drop);
drop.classList.toggle("show");
delete_post.onclick=function(){
    post_deleting(x);
}
edit_post.onclick=function(){
    post_Editing(x);
}
}
function dropdowndynamic(x){
    x.appendChild(drop);
    drop.classList.toggle("show");
    delete_post.onclick=function(){
        post_deleting(x);
    }
    edit_post.onclick=function(){
        post_Editing1(x);
    }
}

function post_deleting(x){
    let a=x.parentElement;
    let b=a.parentElement;
    b.remove();
    //console.log(b);
}

    /*const edit_post_text_div=document.createElement("div");
    edit_post_text_div.classList.add("edit-div");
    const edit_post_text=document.createElement("input");
    edit_post_text.classList.add("post-edit-box");
    const edit_post_save=document.createElement("button");
    edit_post_save.classList.add("post-button1");
    edit_post_save.innerHTML="Save";
    edit_post_text_div.appendChild(edit_post_text);
    edit_post_text_div.appendChild(edit_post_save);*/
    

function post_Editing(x){
    const edit_post_text_div=document.createElement("div");
    edit_post_text_div.classList.add("edit-div");
    edit_post_text_div.id="editdiv"
    const edit_post_text=document.createElement("input");
    edit_post_text.classList.add("post-edit-box");
    const edit_post_save=document.createElement("button");
    edit_post_save.classList.add("post-button1");
    edit_post_save.innerHTML="Save";

    edit_post_text_div.appendChild(edit_post_text);
    edit_post_text_div.appendChild(edit_post_save);

    let a=x.parentElement;
    let b=a.parentElement;
    let c=b.childNodes[3];
    let d=c.childNodes[1];
    let post_content=d.innerText;
    edit_post_text.setAttribute("value",post_content);
    //console.log(post_content);
    //edit_post_text.setAttribute("value",post_content);
    b.replaceWith(edit_post_text_div);
    edit_post_save.onclick=function(){
        let edited_value=edit_post_text.value;
        d.innerHTML=edited_value;
        edit_post_text_div.replaceWith(b);
        //post_content=edited_value;
    }

    document.addEventListener('mouseup', function(e) {
        var container = document.getElementById('container');
        if (!edit_post_text_div.contains(e.target)) {
            edit_post_text_div.replaceWith(b);
        }
    });
    //console.log(post_content);
}

function post_Editing1(x){
    const edit_post_text_div=document.createElement("div");
    edit_post_text_div.classList.add("edit-div");
    const edit_post_text=document.createElement("input");
    edit_post_text.classList.add("post-edit-box");
    const edit_post_save=document.createElement("button");
    edit_post_save.classList.add("post-button1");
    edit_post_save.innerHTML="Save";

    edit_post_text_div.appendChild(edit_post_text);
    edit_post_text_div.appendChild(edit_post_save);

    let a=x.parentElement;
    let b=a.parentElement;
    let c=b.childNodes[1];
    let d=c.childNodes[0];
    //console.log(b);
    let post_content=d.innerText;
    edit_post_text.setAttribute("value",post_content);

    b.replaceWith(edit_post_text_div);
    edit_post_save.onclick=function(){
        let edited_value=edit_post_text.value;
        d.innerHTML=edited_value;
        edit_post_text_div.replaceWith(b);
    }
}


/*-----------------------------------*/
var v=1;
function comment(x){
    if(v==1){
        commenting(x);
        v=2;
        console.log(v);
    }
}

function commenting(x){

    const commentbox_div=document.createElement("div");
    commentbox_div.classList.add("commentbox-div");
    let a=x.parentElement;
    let b=a.parentElement;

    const dp=document.createElement("img");
    dp.src="src/dp.jpg";
    dp.classList.add("dp-style1");
    const commentbox=document.createElement("input");
    commentbox.setAttribute("type","textbox");
    commentbox.setAttribute("placeholder","Comment here");
    commentbox.classList.add("commentbox");
    commentbox.onkeyup=function(){
        success();
    }
    const comment_button=document.createElement("button");
    comment_button.setAttribute("disabled","true");
    comment_button.innerHTML="Comment";
    comment_button.classList.add("comment-button");

    if(comment_button.disabled = true){
        comment_button.style.opacity="0.4";
    }

    commentbox_div.appendChild(dp);
    commentbox_div.appendChild(commentbox);
    commentbox_div.appendChild(comment_button);
    b.parentElement.append(commentbox_div);
    
    function success() {
        if(commentbox.value==="") { 
               comment_button.style.opacity="0.4";
               comment_button.disabled = true; 
           } else { 
               comment_button.disabled = false;
               comment_button.style.opacity="1";
           }
       }


    comment_button.addEventListener("click",function()
    {   
        /*if(commentbox.value==""){
            alert("Comment ..!");
        }
        else{*/
        v=1;
        const comments_div=document.createElement("div");
        comments_div.classList.add("comments-div");
        const dp=document.createElement("img");
        dp.src="src/dp.jpg";
        dp.classList.add("dp-style2");

        const comment_text=document.createElement("div");
        comment_text.classList.add("comment-text");
        comment_text.innerHTML=commentbox.value;


        comments_div.appendChild(dp);
        comments_div.appendChild(comment_text);

        const comment_sections=document.createElement("div");
        comment_sections.classList.add("comment-sections");
    

        const comment_like=document.createElement("p");
        comment_like.classList.add("comment-like");
        comment_like.innerHTML="Like";

        const comment_delete=document.createElement("p");
        comment_delete.classList.add("comment-delete");
        comment_delete.innerHTML="Delete";
        comment_delete.onclick=function(){
            commentRemove(this);
        }


        const comment_edit=document.createElement("p");
        comment_edit.classList.add("comment-edit");
        comment_edit.innerHTML="Edit";
        comment_edit.onclick=function(){
            commentEditing(this);
        }
        const edit_option=document.createElement("div");
        edit_option.classList.add("edit-section");
        
        comments_div.appendChild(edit_option);

        comment_sections.appendChild(comment_like);
        comment_sections.appendChild(comment_edit);
        comment_sections.appendChild(comment_delete);

        
        comment_like.onclick=function(){
            commentLikeToggle(this);
        }
        b.parentElement.appendChild(comments_div);

        comments_div.append(comment_sections);        

        commentbox.value="";
        commentbox_div.style.display="none";
    /*}*/})
}

function commentLikeToggle(x){
    //x.classList.toggle("comment-liked");
    let like_count=0;
    if(x.innerHTML=="Like"){
    x.classList="comment-liked";
    x.innerHTML="Liked";
    like_count++;
    const likeC=document.createElement("p");
    likeC.classList.add("like-count")
    likeC.innerHTML="("+like_count+")";
    x.appendChild(likeC);
    }
    else{
        x.classList="comment-like";
        x.innerHTML="Like";
    }
}

function commentRemove(d){
    var result = confirm("Are you sure to delete?");
    if(result){
    let a=d.parentElement;
    a.parentElement.remove(); 
    }

}

function commentEditing(e){
    let a=e.parentElement;
    let b=a.parentElement;
    var c=b.childNodes[1];
    console.log(c);

    if(c.contentEditable=="true")
    {
        c.contentEditable = false;
        c.style.backgroundColor="#e2e2e2";
        e.innerHTML="Edit"; 
        e.style.color="#888888";
        e.style.fontWeight="500";  
    }
    else{
    c.contentEditable = true;
    c.style.backgroundColor="#a6a6a6";
    e.innerHTML="Save";
    e.style.color="#4267B2";
    e.style.fontWeight="600";
    }
    

    /*e.addEventListener("click",function(){
        c.contentEditable = false;
        c.style.backgroundColor="#e2e2e2";
    })*/
}

/*------------------------*/


function posting(){
    if(posttextbox.value==""){
        alert("Hey... you didn't typed anything...!")
    }
    else{    
    const post=document.createElement("div");
    post.classList.add("posted");
    //postmain.insertAdjacentElement("afterend", post);
    //var c=posted_postes;
    posted_postes.insertBefore(post,posted_postes.firstChild);
    //var c=postmain.childNodes[7];
    //console.log(c);
    
    const posted_user=document.createElement("div");
    posted_user.classList.add("posted-user");
    post.appendChild(posted_user);
    const dp=document.createElement("img");
    dp.src="src/dp.jpg";
    dp.classList.add("dp-style");
    posted_user.appendChild(dp);
    /*console.log(posttextbox.value);*/
    const profilename=document.createElement("h5");
    profilename.classList.add("posted-username");
    profilename.innerHTML="Minnal Murali";
    posted_user.appendChild(profilename);

    const post_time=document.createElement("p");
    post_time.classList.add("posted-time");
    //var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    //var time = today.getHours() + ":" + today.getMinutes();
    var date= new Date().toLocaleDateString();
    var time= new Date().toLocaleTimeString('en-US', { hour: "numeric",minute: "numeric"});
    var dateTime = time+' '+date;
    post_time.innerHTML=dateTime;
    posted_user.appendChild(post_time);

    const post_option=document.createElement("span");
    post_option.classList.add("material-icons");
    post_option.classList.add("post-option");
    post_option.innerHTML="&#xe5d3;"; 
    post_option.onclick=function(){
        dropdowndynamic(this);
    }   
    posted_user.appendChild(post_option);

    /*postcontent.innerHTML=posttextbox.value;*/
    //post.appendChild(postcontent);

    /*const like_section=document.createElement("div");
    like_section.classList.add("like-section");*/

    
    //like_section.append(post_attributes);
    const posted_post=document.createElement("div");
    posted_post.classList.add("posted-post");
    const post_content=document.createElement("p");
    post_content.classList.add("caption");
    let v=posttextbox.value;
    //console.log(v);
    post_content.innerHTML=v;
    posted_post.appendChild(post_content);
    post.append(posted_post);

    const post_section=document.createElement("div");
    post_section.classList.add("like-section1");
    
  
    const like=document.createElement("i");
    like.onclick=function(){
        toggleLike(this);
    }
    like.classList.add("far","fa-thumbs-up","likeandcomment","likencomment");
    //post_section.append(like);
    const liketext=document.createElement("span");
    liketext.classList.add("like_text","likencomment1");
    liketext.innerHTML="Like";
    like.append(liketext);
    const post_attributes1=document.createElement("div");
    post_attributes1.classList.add("post-attributes1");
    post_attributes1.appendChild(like);

    const comment=document.createElement("i");
    comment.classList.add("far","fa-comment","likeandcomment","likencomment");
    comment.onclick=function(){
        commenting(this);
    }
    //post_section.append(comment);
    const commenttext=document.createElement("span");
    commenttext.classList.add("like_text","likencomment1");
    commenttext.innerHTML="Comment";
    comment.append(commenttext);
    const post_attributes2=document.createElement("div");
    post_attributes2.classList.add("post-attributes1");
    post_attributes2.appendChild(comment);
    
    const share=document.createElement("i");
    share.classList.add("fas","fa-share","likeandcomment","likencomment");
    //post_section.append(share);
    const sharetext=document.createElement("span");
    sharetext.classList.add("like_text","likencomment1");
    sharetext.innerHTML="Share";
    share.append(sharetext);
    const post_attributes3=document.createElement("div");
    post_attributes3.classList.add("post-attributes1");
    post_attributes3.appendChild(share);

    post_section.appendChild(post_attributes1);
    post_section.appendChild(post_attributes2);
    post_section.appendChild(post_attributes3);
    
    post.append(post_section);
    posttextbox.value="";
}
}
/*function dropdownit(x){
    document.getElementById("mydrop").classList.toggle("show");
}*/
