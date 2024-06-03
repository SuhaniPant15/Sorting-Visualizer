function Bubble()
{
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText="O(N^2)";
    document.getElementById("Time_Average").innerText="Θ(N^2)";
    document.getElementById("Time_Best").innerText="Ω(N)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText="O(1)";

    c_delay=0;

    for(var i=0;i<array_size-1;i++)
    {
        for(var j=0;j<array_size-i-1;j++)
        {
            div_update(divs[j],div_sizes[j],"#3490DE");//Color 1

            if(div_sizes[j]>div_sizes[j+1])
            {
                div_update(divs[j],div_sizes[j], "#4B6289");//Color 2
                div_update(divs[j+1],div_sizes[j+1], "#4B6289");//Color 2

                var temp=div_sizes[j];
                div_sizes[j]=div_sizes[j+1];
                div_sizes[j+1]=temp;

                div_update(divs[j],div_sizes[j], "#4B6289");//color 2
                div_update(divs[j+1],div_sizes[j+1], "#4B6289");//color 2
            }
            div_update(divs[j],div_sizes[j], "#3A1078");//Color 3
        }
        div_update(divs[j],div_sizes[j], "#5C2E7E");//Color 4
    }
    div_update(divs[0],div_sizes[0], "#5C2E7E");//Color 4

    enable_buttons();
}