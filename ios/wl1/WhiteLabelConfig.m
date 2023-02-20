//
//  WhiteLabelConfig.m
//  whiteLabel
//
//  Created by Davidson Marra on 17/02/23.
//

#import <Foundation/Foundation.h>
#import "WhiteLabelConfig.h"

@implementation WhiteLabelConfig

  RCT_EXPORT_MODULE(WhiteLabelConfig);
 
  RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(getAppName) {
    return [[NSBundle mainBundle] objectForInfoDictionaryKey:@"CFBundleDisplayName"];
  }
 
  RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(getPrimaryColor) {
    return @"#ff0000";
  }
 
  RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(getPrimaryTextColor) {
    return @"#000";
  }
 
  RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(getGreetingText) {
    return @"Seja bem vindo ao White Label Label l!";
  }

@end
