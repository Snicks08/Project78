var images = ["WIN_20211027_19_55_49_Pro.jpg", "papa.jpeg", "punam-amin.jpg"];

var names = ["Family Book", "Dipun Amin", "Punam Amin"];

var i = 0;

function update()
{
    i++;
    var number_of_members_in_family = 2;
    if(i > number_of_members_in_family)
    {
        i=0;
    }
    var updatedImage = images[i];
    var updatedName = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}