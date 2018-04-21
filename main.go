package main

import (
	"net/http"
	"os"
	"os/exec"
	"syscall"
	"time"
)

func routine() {
	for {
		binary, lookErr := exec.LookPath("git")
		if lookErr != nil {
			panic(lookErr)
		}
		args := []string{"git", "pull"}
		env := os.Environ()
		execErr := syscall.Exec(binary, args, env)
		if execErr != nil {
			panic(execErr)
		}
		time.Sleep(time.Duration(time.Minute))
	}
}

func main() {
	go routine()
	http.Handle("/", http.StripPrefix("/", http.FileServer(http.Dir("www"))))
	http.ListenAndServe(":8080", nil)
}
