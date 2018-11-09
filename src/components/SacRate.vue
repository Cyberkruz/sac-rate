<template>
  <div>
    <form>
      <div class="form-row">
        <div class="form-group col-sm">
          <label for="psiIn">Starting Pressure</label>
          <div class="input-group">
            <input v-model="psiIn" type="text" class="form-control" id="psiIn">
            <div class="input-group-append">
              <span class="input-group-text">PSI</span>
            </div>
          </div>
        </div>
        <div class="form-group col-sm">
          <label for="psiOut">Ending Pressure</label>
          <div class="input-group">
            <input v-model="psiOut" type="text" class="form-control" id="psiOut">
            <div class="input-group-append">
              <span class="input-group-text">PSI</span>
            </div>
          </div>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-sm">
          <label for="time">Duration</label>
          <div class="input-group">
            <input v-model="time" type="text" class="form-control" id="time">
            <div class="input-group-append">
              <span class="input-group-text">Minutes</span>
            </div>
          </div>
        </div>
        <div class="form-group col-sm">
          <label for="depth">Depth</label>
          <div class="input-group">
            <input v-model="depth" type="text" class="form-control" id="depth">
            <div class="input-group-append">
              <span class="input-group-text">Feet</span>
            </div>
          </div>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-sm">
          <label for="tankVolume">Tank Volume</label>
          <div class="input-group">
            <input v-model="tankVolume" type="text" class="form-control" id="tankVolume">
            <div class="input-group-append">
              <span class="input-group-text">PSI</span>
            </div>
          </div>
        </div>
        <div class="form-group col-sm">
          <label for="tankWorkingPsi">Tank Working Pressure</label>
          <div class="input-group">
            <input v-model="tankWorkingPsi" type="text" class="form-control" id="tankWorkingPsi">
            <div class="input-group-append">
              <span class="input-group-text">PSI</span>
            </div>
          </div>
        </div>
      </div>
      <button v-on:click="calculate" class="btn btn-primary">Calculate</button>
    </form>
    <div>{{sacRate}}</div>
  </div>
</template>

<script>
import { required, integer, between } from 'vuelidate/lib/validators'
import scuba from '../lib/scuba'

export default {
  name: 'SacForm',
  data() {
    return {
      psiIn: 3000,
      psiOut: 2000,
      time: 60,
      depth: 60,
      tankVolume: 80,
      tankWorkingPsi: 3000,
      sacRate: 0,
    }
  },
  validations: {
    psiIn: {
      required,
      integer,
      between: between(0, 4000),
    },
    psiOut: {
      required,
      integer,
      between: between(0, 4000),
    },
    time: {
      required,
      integer,
      between: between(1, 400),
    },
    depth: {
      required,
      integer,
    },
    tankVolume: {
      required,
      integer,
    },
    tankWorkingPsi: {
      required,
      integer,
    },
  },
  methods: {
    calculate(event) {
      if (event) event.preventDefault()
      this.sacRate = scuba.calculateSac(this.psiIn,
        this.psiOut, this.time, this.depth,
        this.tankVolume, this.tankWorkingPsi)
    },
  },
}
</script>
