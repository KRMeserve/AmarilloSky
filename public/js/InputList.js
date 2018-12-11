class InputList extends React.Component {
    render(){
        return(
            <div>
                <h4 class="title">Input List</h4>
                <p>Amarillo Sky is a 4-piece Band.</p>
                <h3 class="title">Stage Plot:</h3>
                <p><span class="bold">Drummer, Vocalist (Jerry Smith)</span> - Centerstage</p>
                <p><span class="bold">Front Man (Tanner Smale)</span> (Lead Vocalist) - Centerstage in front of drummer</p>
                <p><span class="bold">Bassist, Backup Vocals (Rob Harrier)</span> - Stage Right</p>
                <p><span class="bold">Guitarist (Adam Sarna)</span> - Stage Left</p>
                <h3 class="title">Equipment Requirements:</h3>
                <p><span class="bold">Drummer:</span> 5-piece kit - 2 up, 1 down with a 22" kick. Rolls personal monitor system with in-ears Drummer will be bringing his own mic and stand  *Backup vocalist throughout show and lead vocalist on one song</p>
                <p><span class="bold">Lead Vocalist:</span> Will need a mic and stand. Does not play an instrument. Uses in-ears.</p>
                <p><span class="bold">Bassist:</span> Ampeg 1000 watt head (direct out) with Ampeg 4x10 and 1x15 cabinets. Active 5-string bass. Will need floor monitor (1/2 guitar through monitors and 3/4 vocals through monitors) Will need mic and stand for backup vocals</p>
                <p><span class="bold">Guitarist:</span> 212 Blackstar amp. Direct box for acoustic guitar run through PA. Uses drop tune pedal and pedal board that came with amplifier.  Has a guitar monitor but will need a floor monitor as well. Does not need a mic.</p>
                <button onClick={this.props.toggleInputList} class="input-button">Hide Input List</button>
            </div>
        )
    }
}
