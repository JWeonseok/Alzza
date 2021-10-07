package com.mycom.app.controller;

import com.mycom.app.domain.dto.user.UserDto;
import com.mycom.app.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/user")
public class JoinController {

    @Autowired
    UserService userService;

    @GetMapping
    public ResponseEntity checkUserId(@RequestParam String userId){
        try{
            System.out.println(userId);
            if(userService.checkUserId(userId)) return new ResponseEntity(true, HttpStatus.OK);
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }


    @PostMapping
    public ResponseEntity join(@RequestBody UserDto userDto){
        try{
            int result = userService.join(userDto);
            if(result == 1) return new ResponseEntity(true, HttpStatus.OK);
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
