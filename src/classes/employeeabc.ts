export class EmployeeABC {
    position: string;

    public printPosition(): void {

        switch(this.position)
        {
            case "developer":
                console.log ("I am a developer");
                break;
            case "tester":
                console.log ("I am a tester");
                break;
            case "designer":
                console.log ("I am a designer");
                break;
            default:
                console.log ("I do not really know :)");
                
        }
    }
}