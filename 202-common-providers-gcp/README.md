We've already talked about a few of the basic providers such as random_passowrd, random_guid, and tls_private_key, local_file, and local-exec
in a previous lab.

Now lets, take a closer look at templates, random and file providers a little close.

The template provider has been repalced with a templatefile function. We will look at the function.
The templatefile reads the file at the given path and renders its content as a template using a supplied set of template variables. 
A common use is to have an extenral file contain the startup script you want to run on a VM instance instead of puttin that script inline on the VM terraform config
Lets work through an example of doing that now.
Copy your solution from 101-custom-data-gcp this lab
Now, create a new file and name it 'vm_startup.txt'

in the main.tf file you jsut copied find the line `metadata_startup_script = <<SCRIPT`
Copy all of the text between the SCRIPT tags but do not include the tags.
Edit everywhere you see /home/${var.user}/ change it to /tmp/


Now we need to create out file resource. 
Replace all the SCRIPT text in the main.tf with this simple line:
This tells terrafrom to render the contents of vm_startup.txt into metadata_startup_script
the file function will insert the template text into the main.tf config.

```
metadata_startup_script = file("vm_startup.txt")
}


What do you do if you want your startup-script to have some dynamic values in it? You want to use the templatefile() function instead of file().
Create a new folder and copy you mian.tf and vm_startup.txt file into there.
CHange the /tmp/ text to /home/${user}/. This will let us pass in a value for $user from the templatefile() function.

This tells terrafrom to render the contents of vy_startup.tpl into metadata_startup_script
The first parameter is the template file and the second parameter is a map of variables being sent to the template to render it.
In the template, there are several $user variables. The templatefile function will match those variables to the map before inserting the template text into the main.tf config.

Update the metadata_startup_script like this:
```
metadata_startup_script = templatefile("vm_startup.txt", {user = var.user})
}

```