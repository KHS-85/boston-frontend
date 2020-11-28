import React from 'react'

const PickYourGear = () => {
    return (
        <div>

            <form>

                {/* CPU */}
                <fieldset id="cpuform" class="form-group cpuform">
                    <div class="row">
                        <legend class="col-form-label col-sm-3 pt-0">CPU</legend>
                        <div class="col-sm-9">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="group1" id="gridRadios1" value="option1" defaultChecked  />
                                <label class="form-check-label" for="gridRadios1">AMD Ryzen 5 5600X - 6 cores 3.7 GHz</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="group1" id="gridRadios2" value="option2" />
                                <label class="form-check-label" for="gridRadios2">AMD Ryzen 7 5800X - 8 cores 3.8 GHz</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="group1" id="gridRadios3" value="option3" />
                                <label class="form-check-label" for="gridRadios3">AMD Ryzen 9 5900X - 12 cores 3.7 GHz</label>
                            </div>
                        </div>
                    </div>
                </fieldset>


                {/* Motherboard */}
                <fieldset id="moboform" class="form-group cpuform">
                    <div class="row">
                        <legend class="col-form-label col-sm-3 pt-0">Motherboard</legend>
                        <div class="col-sm-9">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="group2" id="gridRadios1" value="option1" defaultChecked />
                                <label class="form-check-label" for="gridRadios1">ASUS ROG STRIX X570-E AMD AM4 ATX</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="group2" id="gridRadios2" value="option2" />
                                <label class="form-check-label" for="gridRadios2">GIGABYTE B550 AORUS PRO V2 B550 - AMD AM4 - ATX</label>
                            </div>
                        </div>
                    </div>
                </fieldset>


                {/* Memory */}
                <fieldset id="memform" class="form-group cpuform">
                    <div class="row">
                        <legend class="col-form-label col-sm-3 pt-0">Memory</legend>
                        <div class="col-sm-9">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="group3" id="gridRadios1" value="option1" defaultChecked />
                                <label class="form-check-label" for="gridRadios1"> Corsair Vengeance LPX DDR4-3200 C16 BK DC - 16GB </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="group3" id="gridRadios2" value="option2" />
                                <label class="form-check-label" for="gridRadios2"> G.Skill TridentZ Neo DDR4-3600 C16 DC (AMD) - 32GB </label>
                            </div>
                        </div>
                    </div>
                </fieldset>


                {/* Storage */}
                <fieldset id="stoform" class="form-group cpuform">
                    <div class="row">
                        <legend class="col-form-label col-sm-3 pt-0">Storage</legend>
                        <div class="col-sm-9">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="group4" id="gridRadios1" value="option1" defaultChecked />
                                <label class="form-check-label" for="gridRadios1"> Samsung 860 EVO 2.5" SSD - 1TB </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="group4" id="gridRadios2" value="option2" />
                                <label class="form-check-label" for="gridRadios2"> Samsung 970 EVO Plus SSD M.2 2280 - 1TB </label>
                            </div>
                        </div>
                    </div>
                </fieldset>


                {/* Video Card */}
                <fieldset id="vidform" class="form-group cpuform">
                    <div class="row">
                        <legend class="col-form-label col-sm-3 pt-0">Video Card</legend>
                        <div class="col-sm-9">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="group5" id="gridRadios1" value="option1" defaultChecked />
                                <label class="form-check-label" for="gridRadios1"> ASUS GeForce RTX 3070 TUF OC - 8GB GDDR6 RAM </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="group5" id="gridRadios2" value="option2" />
                                <label class="form-check-label" for="gridRadios2"> ASUS GeForce RTX 3080 TUF - 10GB GDDR6X RAM </label>
                            </div>
                        </div>
                    </div>
                </fieldset>


                {/* Case */}
                <fieldset id="casform" class="form-group cpuform">
                    <div class="row">
                        <legend class="col-form-label col-sm-3 pt-0">Case</legend>
                        <div class="col-sm-9">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="group6" id="gridRadios1" value="option1" defaultChecked />
                                <label class="form-check-label" for="gridRadios1">NZXT H510 Matte Black - Miditower</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="group6" id="gridRadios2" value="option2" />
                                <label class="form-check-label" for="gridRadios2">AeroCool Shard TG RGB - Miditower</label>
                            </div>
                        </div>
                    </div>
                </fieldset>


                {/* Power Supply */}
                <fieldset id="powform" class="form-group cpuform">
                    <div class="row">
                        <legend class="col-form-label col-sm-3 pt-0">Power Supply</legend>
                        <div class="col-sm-9">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="group7" id="gridRadios1" value="option1" defaultChecked />
                                <label class="form-check-label" for="gridRadios1">Corsair RM750x - 750 Watt - 80 Plus Gold certified</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="group7" id="gridRadios2" value="option2" />
                                <label class="form-check-label" for="gridRadios2">Corsair RM1000x - 1000 Watt - 80 Plus Gold certified</label>
                            </div>
                        </div>
                    </div>
                </fieldset>

            </form>

        </div>
    )
}

export default PickYourGear
