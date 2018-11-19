<template>
  <div>
    <b-form @submit="onSubmit">
      <b-form-group>
        <b-form-input type="text"
                      v-model="form.username"
                      :state="!$v.form.username.$invalid"/>
        <b-form-invalid-feedback>Something went wrong</b-form-invalid-feedback>
      </b-form-group>
      <button type="submit">Test</button>
    </b-form>

    <form novalidate :class="{ 'was-validated': isValidated }">
      <div class="form-row">
        <div class="form-group col-sm">
          <label for="psiIn">Starting Pressure</label>
          <div class="input-group">
            <input v-model="psiIn" type="text" class="form-control" id="psiIn"
              :class="{ 'is-invalid': $v.psiIn.$error }" v-model.trim="$v.psiIn.$model">
            <div class="input-group-append">
              <span class="input-group-text">PSI</span>
            </div>
          </div>
          <div class="invalid-feedback" v-if="!$v.psiIn.required">Password is required.</div>
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
    <div>{{sacRate}} PSI per minute (SAC)</div>
    <div>{{rmvRate}} Cubic feet per minute (RMV)</div>
  </div>
</template>

<script>
import { valdiationMixin } from 'vuelidate'
import { required, integer, between } from 'vuelidate/lib/validators'
import scuba from '../lib/scuba'

export default {
  name: 'SacForm',
  data() {
    return {
      form: { },
      psiIn: 2000,
      psiOut: 1400,
      time: 10,
      depth: 33,
      tankVolume: 80,
      tankWorkingPsi: 3000,
      sacRate: 0,
      rmvRate: 0,
      isValidated: false,
    }
  },
  mixins: [
    valdiationMixin,
  ],
  validations: {
    form: {
      username: {
        required,
      },
    },
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
      this.isValidated = true
      this.sacRate = scuba.sac(this.psiIn, this.psiOut, this.time, this.depth)
      this.rmvRate = scuba.rmvFromSac(this.sacRate, this.tankVolume, this.tankWorkingPsi)
    },
    onSubmit(event) {
      if (event) event.preventDefault()
    },
  },
}
</script>
